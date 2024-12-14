
import { StormStaff } from '../StormStaff';

describe('stormStaff', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Посох Бури';
    const expectedAttack = 10;
    const expectedDurability = 300;
    const expectedRange = 3;

    const stormStaff = new StormStaff();

    expect(stormStaff).toBeDefined();
    expect(stormStaff.name).toBe(expectedName);
    expect(stormStaff.attack).toBe(expectedAttack);
    expect(stormStaff.durability).toBe(expectedDurability);
    expect(stormStaff.range).toBe(expectedRange);
  });

});
