import { DrinkDecorator } from './DrinkDecorator';

export class SoyMilk extends DrinkDecorator {
  getDescription() {
    return this.drink.getDescription() + ', soy milk';
  }

  getPrice() {
    return this.drink.getPrice() + 0.15;
  }
}