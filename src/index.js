
import './css/style.css';
import { play } from './js/game';

import log, { clearLog } from './js/log';

import { Archer } from './js/characters/Archer';
import { Crossbowman } from './js/characters/Crossbowman';
import { Demourge } from './js/characters/Demourge';
import { Dwart } from './js/characters/Dwart';
import { Mage } from './js/characters/Mage';
import { Warrior } from './js/characters/Warrior';


function makePlayers () {
  return [
    new Archer(1, 'Леголас', log),
    new Crossbowman(8, 'Мухаэлим', log),
    new Demourge(5, 'Гендальф', log),
    new Dwart(12, 'Гиви', log),
    new Mage(3, 'Сарумян', log),
    new Warrior(7, 'Бомж', log)
  ];
}

document.getElementById('clearLog').addEventListener('click', () => {
  clearLog();
});

document.getElementById('startBattle').addEventListener('click', () => {
  clearLog();

  const players = makePlayers();
  log('Игроки созданы');
  players.forEach(player => player.logSelf());

  const winner = play(players, log);
  log(`ПОБЕДИЛ: ${winner.shortInfo}`);
});


