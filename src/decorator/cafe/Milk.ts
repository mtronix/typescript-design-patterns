import { DrinkDecorator } from './DrinkDecorator';

export class Milk extends DrinkDecorator {
  getDescription() {
    return this.drink.getDescription() + ', milk';
  }

  getPrice() {
    return this.drink.getPrice() + 0.10;
  }
}