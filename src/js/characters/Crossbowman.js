
import { Archer } from './Archer';
import { LongBow } from '../weapons/LongBow';

export class Crossbowman extends Archer {
  weapons = [ new LongBow() ];
}
