
import { Warrior } from './Warrior';
import { Axe } from '../weapons/Axe';
import { Knife } from '../weapons/Knife';

export class Dwart extends Warrior {

  constructor(position, name, logger) {
    super(position, name, logger);
    this.life = 130;
    this.initialLife = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    this.weapons = [
      new Axe(),
      new Knife()
    ];
    this.hitCount = 0
  }

  takeDamage(damage) {
    this.hitCount++;
    let takenDamage = damage;
    if (this.hitCount % 6 === 0 && this.getLuck() > 0.5) {
      takenDamage = takenDamage / 2;
    }
    super.takeDamage(takenDamage);
  }

}
