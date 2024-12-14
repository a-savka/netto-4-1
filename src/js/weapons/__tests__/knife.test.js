
import { Knife } from '../Knife';

describe('knife', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Нож';
    const expectedAttack = 5;
    const expectedDurability = 300;
    const expectedRange = 1;

    const knife = new Knife();

    expect(knife).toBeDefined();
    expect(knife.name).toBe(expectedName);
    expect(knife.attack).toBe(expectedAttack);
    expect(knife.durability).toBe(expectedDurability);
    expect(knife.range).toBe(expectedRange);
  });

});