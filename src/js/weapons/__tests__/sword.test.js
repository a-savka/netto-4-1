

import { Sword } from '../Sword';

describe('sword', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Меч';
    const expectedAttack = 25;
    const expectedDurability = 500;
    const expectedRange = 1;

    const sword = new Sword();

    expect(sword).toBeDefined();
    expect(sword.name).toBe(expectedName);
    expect(sword.attack).toBe(expectedAttack);
    expect(sword.durability).toBe(expectedDurability);
    expect(sword.range).toBe(expectedRange);
  });

});