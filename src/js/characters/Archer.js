
import { Player } from './Player';
import { Bow } from '../weapons/Bow';

export class Archer extends Player {
  weapons = [ new Bow() ];
}
