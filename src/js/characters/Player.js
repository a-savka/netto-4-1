
import { Arm } from '../weapons/Arm';

export class Player {

  constructor(position, name, logger = () => {}) {

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
    this.log = logger;
  }

  get weapon() {
    // Реализует логику смены оружия когда текущее ломаается
    // Поэтому делать метод checkWeapon необходимости нет
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
    return (this.attack + this.weapon.getDamage()) * this.getLuck() / Math.max(distance, 1) ;
  }

  takeDamage(damage) {
    this.log(`${this.shortInfo} получает урон в ${damage}`);
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
    this.log(`${this.shortInfo} получает удар силой ${damage}`);
    if (this.isAttackBlocked()) {
      this.log(`${this.shortInfo} блокирует удар`);
      this.weapon.takeDamage(damage);
    } else if (!this.dodged()) {
      this.takeDamage(damage);
    } else {
      this.log(`${this.shortInfo} уклоняется от удара`);
    }
  }

  tryAttack(enemy) {
    this.log(`${this.shortInfo} пытается атаковать ${enemy.shortInfo}.`);
    let distance = Math.abs(this.position - enemy.position);
    if (distance > this.weapon.range) {
      this.log(`${this.shortInfo} недостает до ${enemy.shortInfo}.`);
      return;
    }
    this.weapon.takeDamage(10 * this.getLuck());
    let damage = this.getDamage(distance);
    if (distance === 0) {
      this.log(`${this.shortInfo} на одинаковой позиции с соперником и будет бить в 2 раза сильнее`);
      enemy.moveRight(1);
      this.log(`соперник отскакивает на один ход ${enemy.shortInfo}`);
      damage *= 2;
    }
    enemy.takeAttack(damage);
    if (enemy.isDead()) {
      this.log(`${enemy.shortInfo} погиб в бою.`, 'red');
    }
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
    this.log(`${this.name} начинает ход.`);
    const enemy = this.chooseEnemy(players);
    this.log(`${this.shortInfo} выбирает ${enemy.shortInfo}.`);
    this.moveToEnemy(enemy);
    this.log(`${this.shortInfo} переместился к сопернику.`);
    this.tryAttack(enemy);
  }

  logSelf() {
    this.log(`${this.description} ${this.name},  life: ${this.life}`);
  }

  get shortInfo() {
    return `${this.name}, P: ${this.position}, L: ${this.life.toFixed(2)}`;
  }

}
