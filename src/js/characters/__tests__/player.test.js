
import { Sword } from '../../weapons/Sword';
import { Player } from '../Player';

describe('Player', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Василий Иванович';
    const expectedPosition = 10;
    const expectedLife = 100;
    const expectedMagic = 20;
    const expectedSpeed = 1;
    const expectedAttack = 10;
    const expectedAgility = 5;
    const expectedLuck = 10;
    const expectedDescription = 'Игрок';
    const expectedWeaponName = 'Рука';

    const player = new Player(10, 'Василий Иванович');

    expect(player).toBeDefined();
    expect(player.name).toBe(expectedName);
    expect(player.position).toBe(expectedPosition);
    expect(player.life).toBe(expectedLife);
    expect(player.magic).toBe(expectedMagic);
    expect(player.speed).toBe(expectedSpeed);
    expect(player.attack).toBe(expectedAttack);
    expect(player.agility).toBe(expectedAgility);
    expect(player.luck).toBe(expectedLuck);
    expect(player.description).toBe(expectedDescription);
    expect(player.weapon.name).toBe(expectedWeaponName);
  });

  it('should use right weapon', () => {
    const player = new Player(10, 'Василий Иванович');
    player.weapons = [ new Sword() ];
    const playerWeapon = player.weapon;
    expect(playerWeapon.name).toBe('Меч');
  });

  it('should not use broken weapon', () => {
    const player = new Player(10, 'Василий Иванович');
    const sword = new Sword();
    sword.takeDamage(1000);
    player.weapons = [ sword ];
    const playerWeapon = player.weapon;
    expect(playerWeapon.name).toBe('Рука');
  });

  describe('methods', () => {

    let player;
    beforeEach(() => {
      player = new Player(10, 'Василий Иванович');
    });

    it('should be lucky', () => {
      const luck = player.getLuck();
      expect(luck > 0).toBe(true);
    });

    it('should produce damage', () => {
      const damage = player.getDamage(1);
      expect(damage > 0).toBe(true);
    });

    it('should not produce damage if weapon range exceeded', () => {
      const damage = player.getDamage(3);
      expect(damage).toBe(0);
    });

    it('should take damage', () => {
      const expected = 90;
      player.takeDamage(10);
      expect(player.life).toBe(expected);
    });

    it('must die', () => {
      const expected = true;
      player.takeDamage(100);
      expect(player.isDead()).toBe(expected);
    });

    it('should move left', () => {
      const expected = 9;
      player.moveLeft(1);
      expect(player.position).toBe(expected);
    });

    it('should not exceed the speed when moving left', () => {
      const expected = 9;
      player.moveLeft(2);
      expect(player.position).toBe(expected);
    });

    it('should move right', () => {
      const expected = 11;
      player.moveRight(1);
      expect(player.position).toBe(expected);
    });

    it('should not exceed the speed when moving right', () => {
      const expected = 11;
      player.moveRight(2);
      expect(player.position).toBe(expected);
    });

    it('should choose right direction', () => {
      const expected = 11;
      player.move(1);
      expect(player.position).toBe(expected);
    });

    it('should choose left direction', () => {
      const expected = 9;
      player.move(-1);
      expect(player.position).toBe(expected);
    });

    it('should block attack when lucky', () => {
      player.getLuck = () => 0.91;
      const isBlocked = player.isAttackBlocked();
      expect(isBlocked).toBe(true);
    });

    it('should not block attack when not lucky enough', () => {
      player.getLuck = () => 0.89;
      const isBlocked = player.isAttackBlocked();
      expect(isBlocked).toBe(false);
    });

    it('should be dodged when lucky', () => {
      player.getLuck = () => 0.93;
      const dodged = player.dodged();
      expect(dodged).toBe(true);
    });

    it('should not be dodged when not lucky enough', () => {
      player.getLuck = () => 0.91;
      const dodged = player.dodged();
      expect(dodged).toBe(false);
    });

    it('should take attack and block it', () => {
      player.getLuck = () => 0.95;
      player.weapons = [ new Sword() ];
      player.takeAttack(10);
      expect(player.life).toBe(100);
      expect(player.weapon.durability).toBe(490);
    });

    it('should dodge attack', () => {
      player.getLuck = () => 0.8;
      player.weapons = [ new Sword() ];
      player.agility = 90;
      player.takeAttack(10);
      expect(player.life).toBe(100);
      expect(player.weapon.durability).toBe(500);
    });

    it('should choose weakest enemy', () => {
        const player2 = new Player(8, 'Никита Попович');
        const player3 = new Player(7, 'Петр Колобкович');
        player3.life = 50;
        const players = [ player, player2, player3 ];
        const choosen = player.chooseEnemy(players);
        expect(choosen).toBe(player3);
    });

    it('should move to the enemy', () => {
      const player2= new Player(8, 'Никита Попович');
      player.moveToEnemy(player2);
      expect(player.position).toBe(9);
    });

    it('should move on turn to weakest enemy', () => {
      const player2 = new Player(8, 'Никита Попович');
      const player3 = new Player(14, 'Петр Колобкович');
      player3.life = 50;
      const players = [ player, player2, player3 ];
      const choosen = player.turn(players);
      expect(player.position).toBe(11);
    });

  });
});
