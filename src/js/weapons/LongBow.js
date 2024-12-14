import { Bow } from './Bow';

export class LongBow extends Bow {

  constructor(
    name = 'Длинный лук',
    attack = 15,
    range = 4
  ) {
    super(name, attack, undefined, range);
  }

}
