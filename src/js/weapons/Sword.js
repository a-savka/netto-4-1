import { Weapon } from './Weapon';

export class Sword extends Weapon {

  constructor(
    name = 'Меч',
    attack = 25,
    durability = 500,
    range = 1
  ) {
    super(name, attack, durability, range);
  }

}
