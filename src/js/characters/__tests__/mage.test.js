
import { Mage } from '../Mage';

describe('Mage', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Мага Маг';
    const expectedPosition = 10;
    const expectedLife = 70;
    const expectedMagic = 100;
    const expectedSpeed = 1;
    const expectedAttack = 5;
    const expectedAgility = 8;
    const expectedLuck = 10;
    const expectedDescription = 'Маг';
    const expectedWeaponName = 'Посох';

    const mage = new Mage(10, 'Мага Маг');

    expect(mage).toBeDefined();
    expect(mage.name).toBe(expectedName);
    expect(mage.position).toBe(expectedPosition);
    expect(mage.life).toBe(expectedLife);
    expect(mage.magic).toBe(expectedMagic);
    expect(mage.speed).toBe(expectedSpeed);
    expect(mage.attack).toBe(expectedAttack);
    expect(mage.agility).toBe(expectedAgility);
    expect(mage.luck).toBe(expectedLuck);
    expect(mage.description).toBe(expectedDescription);
    expect(mage.weapon.name).toBe(expectedWeaponName);
  });

  it('should take damage from magic', () => {
    const mage = new Mage(10, 'Мага');
    mage.takeDamage(10);
    expect(mage.magic).toBe(88);
    expect(mage.life).toBe(65);
  });

  it('should take damage from life when magic < 50%', () => {
    const mage = new Mage(10, 'Мага');
    mage.magic = 49;
    mage.takeDamage(10);
    expect(mage.magic).toBe(49);
    expect(mage.life).toBe(60);
  });

});
