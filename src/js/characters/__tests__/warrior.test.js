
import { Warrior } from '../Warrior';

describe('Warrior', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Василий Воин';
    const expectedPosition = 10;
    const expectedLife = 120;
    const expectedMagic = 20;
    const expectedSpeed = 2;
    const expectedAttack = 10;
    const expectedAgility = 5;
    const expectedLuck = 10;
    const expectedDescription = 'Воин';
    const expectedWeaponName = 'Меч';

    const warrior = new Warrior(10, 'Василий Воин');

    expect(warrior).toBeDefined();
    expect(warrior.name).toBe(expectedName);
    expect(warrior.position).toBe(expectedPosition);
    expect(warrior.life).toBe(expectedLife);
    expect(warrior.magic).toBe(expectedMagic);
    expect(warrior.speed).toBe(expectedSpeed);
    expect(warrior.attack).toBe(expectedAttack);
    expect(warrior.agility).toBe(expectedAgility);
    expect(warrior.luck).toBe(expectedLuck);
    expect(warrior.description).toBe(expectedDescription);
    expect(warrior.weapon.name).toBe(expectedWeaponName);
  });

  it('should take damage from magic when lucky', () => {
    const warrior = new Warrior(10, 'Василий Воин');
    warrior.life = 40;
    warrior.getLuck = () => 0.9;
    warrior.takeDamage(10);
    expect(warrior.magic).toBe(10);
    expect(warrior.life).toBe(40);
  });

  it('should take damage from life when life > 50%', () => {
    const warrior = new Warrior(10, 'Василий Воин');
    warrior.life = 60;
    warrior.getLuck = () => 0.9;
    warrior.takeDamage(10);
    expect(warrior.magic).toBe(20);
    expect(warrior.life).toBe(50);
  });

  it('should take damage from life when unlucky', () => {
    const warrior = new Warrior(10, 'Василий Воин');
    warrior.life = 40;
    warrior.getLuck = () => 0.7;
    warrior.takeDamage(10);
    expect(warrior.magic).toBe(20);
    expect(warrior.life).toBe(30);
  });

});
