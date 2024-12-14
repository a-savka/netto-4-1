
import { Weapon } from '../Weapon';

describe('Weapon', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Оружие';
    const expectedAttack = 10;
    const expectedDurability = 100;
    const expectedRange = 1;

    const weapon = new Weapon('Оружие', 10, 100, 1);

    expect(weapon).toBeDefined();
    expect(weapon.name).toBe(expectedName);
    expect(weapon.attack).toBe(expectedAttack);
    expect(weapon.durability).toBe(expectedDurability);
    expect(weapon.range).toBe(expectedRange);
  });

  describe('methods', () => {

    let weapon;
    beforeEach(() => {
      weapon = new Weapon('Оружие', 10, 100, 1);
    });

    it('should take small damage', () => {
      const expected = 96;
      weapon.takeDamage(4);
      expect(weapon.durability).toBe(expected);
    });

    it('should take full damage', () => {
      const expected = 0;
      weapon.takeDamage(120);
      expect(weapon.durability).toBe(expected);
    });

    it('should not be broken', () => {
      const expected = false;
      weapon.takeDamage(4);
      expect(weapon.isBroken()).toBe(expected);
    });

    it('should be broken', () => {
      const expected = true;
      weapon.takeDamage(120);
      expect(weapon.isBroken()).toBe(expected);
    });

    it('should get full damage', () => {
      const expected = 10;
      const actual = weapon.getDamage();
      expect(actual).toBe(expected);
    });

    it('should get half damage', () => {
      const expected = 5;
      weapon.takeDamage(80);
      const actual = weapon.getDamage();
      expect(actual).toBe(expected);
    });

    it('should get no damage', () => {
      const expected = 0;
      weapon.takeDamage(120);
      const actual = weapon.getDamage();
      expect(actual).toBe(expected);
    });

  });

});