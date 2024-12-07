
import { Warrior } from './Warrior';
import { Axe } from '../weapons/Axe';

export class Dwart extends Warrior {
  weapons = [ new Axe() ];
}
