import { Drink } from './Drink';

export class StarCafeSpecial extends Drink {
  getDescription() {
    return 'Star Cafe special coffee';
  }

  getPrice() {
    return 0.89;
  }
}