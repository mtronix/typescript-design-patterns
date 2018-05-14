import { DrinkDecorator } from './DrinkDecorator';

export class Chocolate extends DrinkDecorator {
  getDescription() {
    return this.drink.getDescription() + ', chocolate';
  }

  getPrice() {
    return this.drink.getPrice() + 0.20;
  }
}