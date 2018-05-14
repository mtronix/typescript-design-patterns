import { Drink } from './Drink';

export class Espresso extends Drink {
  public getDescription() {
    return 'Espresso coffee';
  }

  public getPrice() {
    return 1.99;
  }
}