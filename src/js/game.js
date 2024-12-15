
import { Archer } from './characters/Archer';
import { Crossbowman } from './characters/Crossbowman';
import { Demourge } from './characters/Demourge';
import { Dwart } from './characters/Dwart';
import { Mage } from './characters/Mage';
import { Warrior } from './characters/Warrior';

export function play() {
  
  let players = [
    new Archer(1, 'Леголас'),
    new Crossbowman(8, 'Мухаэлим'),
    new Demourge(5, 'Гендальф'),
    new Dwart(12, 'Гиви'),
    new Mage(3, 'Сарумян'),
    new Warrior(7, 'Бомж')
  ];

  let current = 0;
  while (players.length > 1) {
    const player = players[current];
    player.turn(players);
    players = players.filter(player => !player.isDead());
    if (player === players[current]) {
      current++;
    }
    if (current === players.length) {
      current = 0;
    }
  }

  console.log(`Победил: ${players[0].name}`);
}

