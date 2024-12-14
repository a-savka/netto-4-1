
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

  });
});
