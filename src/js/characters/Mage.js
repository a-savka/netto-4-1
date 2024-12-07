
import { Player } from './Player';
import { Staff } from '../weapons/Staff';

export class Mage extends Player {
  weapons = [ new Staff() ];
}
