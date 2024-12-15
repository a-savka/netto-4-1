
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

  moveLeft(distance) {
    this.position -= Math.min(this.speed, distance);
  }

  moveRight(distance) {
    this.position += Math.min(this.speed, distance);
  }

  move(distance) {
    if (distance > 0) {
      this.moveRight(distance);
    } else {
      this.moveLeft(-distance);
    }
  }

  isAttackBlocked() {
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged() {
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
    } else if (!this.dodged()) {
      this.takeDamage(damage);
    }
  }

  tryAttack(enemy) {
    let distance = Math.abs(this.position - enemy.position);
    if (distance > this.weapon.range) {
      return;
    }
    this.weapon.takeDamage(10 * this.getLuck());
    let damage = this.getDamage(distance);
    if (distance === 0) {
      enemy.moveRight(1);
      damage *= 2;
    }
    enemy.takeAttack(damage);
  }

  chooseEnemy(players) {
    return players
      .filter(player => player !== this)
      .reduce(
        (acc, el) => acc === null || el.life < acc.life ? el : acc,
        null
      );
  }

  moveToEnemy(enemy) {
    this.move(enemy.position - this.position);
  }

  turn(players) {
    const enemy = this.chooseEnemy(players);
    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }

}
