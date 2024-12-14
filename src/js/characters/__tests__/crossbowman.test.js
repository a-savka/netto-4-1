
import { Crossbowman } from '../Crossbowman';

describe('Crossbowman', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Мухаэлим';
    const expectedPosition = 10;
    const expectedLife = 85;
    const expectedMagic = 35;
    const expectedSpeed = 1;
    const expectedAttack = 8;
    const expectedAgility = 20;
    const expectedLuck = 15;
    const expectedDescription = 'Арбалетчик';
    const expectedWeaponName = 'Длинный лук';

    const crossbowman = new Crossbowman(10, 'Мухаэлим');

    expect(crossbowman).toBeDefined();
    expect(crossbowman.name).toBe(expectedName);
    expect(crossbowman.position).toBe(expectedPosition);
    expect(crossbowman.life).toBe(expectedLife);
    expect(crossbowman.magic).toBe(expectedMagic);
    expect(crossbowman.speed).toBe(expectedSpeed);
    expect(crossbowman.attack).toBe(expectedAttack);
    expect(crossbowman.agility).toBe(expectedAgility);
    expect(crossbowman.luck).toBe(expectedLuck);
    expect(crossbowman.description).toBe(expectedDescription);
    expect(crossbowman.weapon.name).toBe(expectedWeaponName);
  });

});
