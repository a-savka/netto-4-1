
import { Axe } from '../Axe';

describe('axe', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Секира';
    const expectedAttack = 27;
    const expectedDurability = 800;
    const expectedRange = 1;

    const axe = new Axe();

    expect(axe).toBeDefined();
    expect(axe.name).toBe(expectedName);
    expect(axe.attack).toBe(expectedAttack);
    expect(axe.durability).toBe(expectedDurability);
    expect(axe.range).toBe(expectedRange);
  });

});