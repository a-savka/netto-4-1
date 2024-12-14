import { Staff } from './Staff';

export class StormStaff extends Staff {

  constructor(
    name = 'Посох Бури',
    attack = 10,
    range = 3
  ) {
    super(name, attack, undefined, range);
  }

}
