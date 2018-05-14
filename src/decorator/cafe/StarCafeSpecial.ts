import { Drink } from './Drink';

export class StarCafeSpecial extends Drink {
  public getDescription() {
    return 'Star Cafe special coffee';
  }

  public getPrice() {
    return 0.89;
  }
}