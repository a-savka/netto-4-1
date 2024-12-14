
import { Arm } from '../weapons/Arm';

export class Player {

  constructor(position, name) {

    this.name = name;
    this.position = position;
    this.life = 100;
    this.initialLife = 100;
    this.magic = 20;
    this.initialMagic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapons = [
    ];
    this.baseWeapon = new Arm();
  }

  get weapon() {
    for (let currentWeapon of this.weapons) {
      if (!currentWeapon.isBroken()) {
        return currentWeapon;
      }
    }
    return this.baseWeapon;
  }

  getLuck() {
    return (Math.random() * 100 + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    return (this.attack + this.weapon.getDamage()) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life = Math.max(0, this.life - damage);
  }

  isDead() {
    return this.life === 0;
  }

}
