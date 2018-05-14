import { DrinkDecorator } from './DrinkDecorator';

export class WhippedCream extends DrinkDecorator {
  public getDescription() {
    return this.drink.getDescription() + ', whipped cream';
  }

  public getPrice() {
    return this.drink.getPrice() + 0.10;
  }
}