
import { Staff } from '../Staff';

describe('staff', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Посох';
    const expectedAttack = 8;
    const expectedDurability = 300;
    const expectedRange = 2;

    const staff = new Staff();

    expect(staff).toBeDefined();
    expect(staff.name).toBe(expectedName);
    expect(staff.attack).toBe(expectedAttack);
    expect(staff.durability).toBe(expectedDurability);
    expect(staff.range).toBe(expectedRange);
  });

});