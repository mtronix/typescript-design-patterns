import { Drink } from './Drink';

export class HeavilyRoasted extends Drink {
  public getDescription() {
    return 'Heavily roasted coffee';
  }

  public getPrice() {
    return 0.99;
  }
}