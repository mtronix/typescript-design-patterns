import { Drink } from './Drink';

export class Decaffeinated extends Drink {
  public getDescription() {
    return 'Decaffeinated coffee';
  }

  public getPrice() {
    return 1.05;
  }
}