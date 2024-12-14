import { Sword } from './Sword';

export class Axe extends Sword {

  constructor(
    name = 'Секира',
    attack = 27,
    durability = 800
  ) {
    super(name, attack, durability);
  }

}
