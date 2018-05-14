import { DrinkDecorator } from './DrinkDecorator';

export class WhippedCream extends DrinkDecorator {
  getDescription() {
    return this.drink.getDescription() + ', whipped cream';
  }

  getPrice() {
    return this.drink.getPrice() + 0.10;
  }
}