import { Drink } from './Drink';

export class Decaffeinated extends Drink {
  getDescription() {
    return 'Decaffeinated coffee';
  }

  getPrice() {
    return 1.05;
  }
}