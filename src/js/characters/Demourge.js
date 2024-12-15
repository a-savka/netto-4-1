
import { Mage } from './Mage';
import { StormStaff } from '../weapons/StormStaff';
import { Knife } from '../weapons/Knife';

export class Demourge extends Mage {

  constructor(position, name, logger) {
    super(position, name, logger);
    this.life = 80;
    this.initialLife = 80;
    this.magic = 120;
    this.initialMagic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = 'Демиург';
    this.weapons = [
      new StormStaff(),
      new Knife()
    ];
  }

  getDamage(distance) {
    const damage = super.getDamage(distance);
    if (this.magic > 0 && this.getLuck() > 0.6) {
      return damage * 1.5;
    }
    return damage;
  }

}
