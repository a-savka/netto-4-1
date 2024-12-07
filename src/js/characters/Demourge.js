
import { Mage } from './Mage';
import { StormStaff } from '../weapons/StormStaff';

export class Demourge extends Mage {
  weapons = [ new StormStaff() ];
}
