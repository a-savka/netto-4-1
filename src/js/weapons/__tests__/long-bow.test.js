
import { LongBow } from '../LongBow';

describe('longBow', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Длинный лук';
    const expectedAttack = 15;
    const expectedDurability = 200;
    const expectedRange = 4;

    const longBow = new LongBow();

    expect(longBow).toBeDefined();
    expect(longBow.name).toBe(expectedName);
    expect(longBow.attack).toBe(expectedAttack);
    expect(longBow.durability).toBe(expectedDurability);
    expect(longBow.range).toBe(expectedRange);
  });

});