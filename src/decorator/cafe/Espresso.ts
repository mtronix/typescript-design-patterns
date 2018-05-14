import { Drink } from './Drink';

export class Espresso extends Drink {
  getDescription() {
    return 'Espresso coffee';
  }

  getPrice() {
    return 1.99;
  }
}