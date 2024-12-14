
import { Dwart } from '../Dwart';

describe('Dwart', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Гимли';
    const expectedPosition = 10;
    const expectedLife = 130;
    const expectedMagic = 20;
    const expectedSpeed = 2;
    const expectedAttack = 15;
    const expectedAgility = 5;
    const expectedLuck = 20;
    const expectedDescription = 'Гном';
    const expectedWeaponName = 'Секира';

    const dwart = new Dwart(10, 'Гимли');

    expect(dwart).toBeDefined();
    expect(dwart.name).toBe(expectedName);
    expect(dwart.position).toBe(expectedPosition);
    expect(dwart.life).toBe(expectedLife);
    expect(dwart.magic).toBe(expectedMagic);
    expect(dwart.speed).toBe(expectedSpeed);
    expect(dwart.attack).toBe(expectedAttack);
    expect(dwart.agility).toBe(expectedAgility);
    expect(dwart.luck).toBe(expectedLuck);
    expect(dwart.description).toBe(expectedDescription);
    expect(dwart.weapon.name).toBe(expectedWeaponName);
  });

  it('should take half damage each 6th hit when lucky', () => {
    const dwart = new Dwart(10, 'Гимли');
    dwart.getLuck = () => 0.6;
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    expect(dwart.life).toBe(75);
  });

  it('should take full damage each 6th hit when unlucky', () => {
    const dwart = new Dwart(10, 'Гимли');
    dwart.getLuck = () => 0.4;
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    dwart.takeDamage(10);
    expect(dwart.life).toBe(70);
  });

});
