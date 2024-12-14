
import { Bow } from '../Bow';

describe('Bow', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Лук';
    const expectedAttack = 10;
    const expectedDurability = 200;
    const expectedRange = 3;

    const bow = new Bow();

    expect(bow).toBeDefined();
    expect(bow.name).toBe(expectedName);
    expect(bow.attack).toBe(expectedAttack);
    expect(bow.durability).toBe(expectedDurability);
    expect(bow.range).toBe(expectedRange);
  });

});