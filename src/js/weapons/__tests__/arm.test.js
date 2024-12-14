
import { Arm } from '../Arm';

describe('Arm', () => {

  test('should be created with expected characteristics', () => {
    const expectedName = 'Рука';
    const expectedAttack = 1;
    const expectedDurability = Infinity;
    const expectedRange = 1;

    const arm = new Arm();

    expect(arm).toBeDefined();
    expect(arm.name).toBe(expectedName);
    expect(arm.attack).toBe(expectedAttack);
    expect(arm.durability).toBe(expectedDurability);
    expect(arm.range).toBe(expectedRange);
  });

  it('should have infinite durability', () => {
    const expected = Infinity;
    const arm = new Arm();
    arm.takeDamage(1000);
    expect(arm.durability).toBe(expected);
  });

  it('should have infinite durability', () => {
    const expected = false;
    const arm = new Arm();
    arm.takeDamage(1000);
    expect(arm.isBroken()).toBe(expected);
  });

  it('should have full damage', () => {
    const expected = 1;
    const arm = new Arm();
    arm.takeDamage(1000);
    expect(arm.getDamage()).toBe(expected);
  });

});
