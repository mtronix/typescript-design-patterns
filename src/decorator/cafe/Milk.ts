import { DrinkDecorator } from './DrinkDecorator';

export class Milk extends DrinkDecorator {
  public getDescription() {
    return this.drink.getDescription() + ', milk';
  }

  public getPrice() {
    return this.drink.getPrice() + 0.10;
  }
}