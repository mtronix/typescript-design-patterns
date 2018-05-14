import { Drink } from './Drink';

export class DrinkDecorator extends Drink {
  protected drink: Drink;

  constructor(drink: Drink) {
    super();

    this.drink = drink;
  }

  getDescription() {
    return this.drink.getDescription();
  }

  getPrice() {
    return this.drink.getPrice();
  }
}