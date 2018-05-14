import { Drink } from './Drink';

export class HeavilyRoasted extends Drink {
  getDescription() {
    return 'Heavily roasted coffee';
  }

  getPrice() {
    return 0.99;
  }
}