
import { Archer } from '../Archer';

describe('Archer', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Леголас';
    const expectedPosition = 10;
    const expectedLife = 80;
    const expectedMagic = 35;
    const expectedSpeed = 1;
    const expectedAttack = 5;
    const expectedAgility = 10;
    const expectedLuck = 10;
    const expectedDescription = 'Лучник';
    const expectedWeaponName = 'Лук';

    const archer = new Archer(10, 'Леголас');

    expect(archer).toBeDefined();
    expect(archer.name).toBe(expectedName);
    expect(archer.position).toBe(expectedPosition);
    expect(archer.life).toBe(expectedLife);
    expect(archer.magic).toBe(expectedMagic);
    expect(archer.speed).toBe(expectedSpeed);
    expect(archer.attack).toBe(expectedAttack);
    expect(archer.agility).toBe(expectedAgility);
    expect(archer.luck).toBe(expectedLuck);
    expect(archer.description).toBe(expectedDescription);
    expect(archer.weapon.name).toBe(expectedWeaponName);
  });

  it('should produce some damage', () => {
    const archer = new Archer(10, 'Леголас');
    const damage = archer.getDamage(1);
    expect(damage > 0).toBe(true);
  });

  it('should produce no damage', () => {
    const archer = new Archer(10, 'Леголас');
    const damage = archer.getDamage(5);
    expect(damage).toBe(0);
  });

});
