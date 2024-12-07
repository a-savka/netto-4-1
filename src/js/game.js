
import { Archer } from './characters/Archer';
import { Crossbowman } from './characters/Crossbowman';
import { Demourge } from './characters/Demourge';
import { Dwart } from './characters/Dwart';
import { Mage } from './characters/Mage';
import { Player } from './characters/Player';
import { Warrior } from './characters/Warrior';

export function play() {
  
  const characters = [
    new Player(),
    new Archer(),
    new Crossbowman(),
    new Demourge(),
    new Dwart(),
    new Mage(),
    new Warrior()
  ];

  return {
    characters
  };

}
