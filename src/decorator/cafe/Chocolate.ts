import { DrinkDecorator } from './DrinkDecorator';

export class Chocolate extends DrinkDecorator {
  public getDescription() {
    return this.drink.getDescription() + ', chocolate';
  }

  public getPrice() {
    return this.drink.getPrice() + 0.20;
  }
}