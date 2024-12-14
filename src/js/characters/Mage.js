
import { Player } from './Player';
import { Staff } from '../weapons/Staff';
import { Knife } from '../weapons/Knife';

export class Mage extends Player {

  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.initialLife = 70;
    this.magic = 100;
    this.initialMagic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = 'Маг';
    this.weapons = [
      new Staff(),
      new Knife()
    ];
  }

  takeDamage(damage) {
    if (this.magic > this.initialMagic / 2) {
      super.takeDamage(damage / 2);
      this.magic -= 12;
    } else {
      super.takeDamage(damage);
    }
  }

}
