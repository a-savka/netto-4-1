
import { Demourge } from '../Demourge';

const DELTA = 0.000001;

describe('Demourge', () => {

  it('should be created with expected characteristics', () => {

    const expectedName = 'Гендальф';
    const expectedPosition = 10;
    const expectedLife = 80;
    const expectedMagic = 120;
    const expectedSpeed = 1;
    const expectedAttack = 6;
    const expectedAgility = 8;
    const expectedLuck = 12;
    const expectedDescription = 'Демиург';
    const expectedWeaponName = 'Посох Бури';

    const demourge = new Demourge(10, 'Гендальф');

    expect(demourge).toBeDefined();
    expect(demourge.name).toBe(expectedName);
    expect(demourge.position).toBe(expectedPosition);
    expect(demourge.life).toBe(expectedLife);
    expect(demourge.magic).toBe(expectedMagic);
    expect(demourge.speed).toBe(expectedSpeed);
    expect(demourge.attack).toBe(expectedAttack);
    expect(demourge.agility).toBe(expectedAgility);
    expect(demourge.luck).toBe(expectedLuck);
    expect(demourge.description).toBe(expectedDescription);
    expect(demourge.weapon.name).toBe(expectedWeaponName);
  });

  it('should produce 1.5 damage', () => {
    const demourge = new Demourge(10, 'Гендальф');
    demourge.getLuck = () => 0.8;
    const damage = demourge.getDamage(1);
    expect(Math.abs(damage - 19.2) < DELTA).toBe(true);
  });

  it('should produce regular damage', () => {
    const demourge = new Demourge(10, 'Гендальф');
    demourge.getLuck = () => 0.5;
    const damage = demourge.getDamage(1);
    expect(Math.abs(damage - 8) < DELTA).toBe(true);
  });

});
