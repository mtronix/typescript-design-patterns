import { DrinkDecorator } from './DrinkDecorator';

export class SoyMilk extends DrinkDecorator {
  public getDescription() {
    return this.drink.getDescription() + ', soy milk';
  }

  public getPrice() {
    return this.drink.getPrice() + 0.15;
  }
}