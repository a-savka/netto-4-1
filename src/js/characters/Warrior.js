
import { Player } from './Player';
import { Sword } from '../weapons/Sword';

export class Warrior extends Player {
  weapons = [ new Sword() ];
}
