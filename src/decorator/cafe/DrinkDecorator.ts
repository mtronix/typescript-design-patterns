import { Drink } from './Drink';

export class DrinkDecorator extends Drink {
  protected drink: Drink;

  public constructor(drink: Drink) {
    super();

    this.drink = drink;
  }

  public getDescription() {
    return this.drink.getDescription();
  }

  public getPrice() {
    return this.drink.getPrice();
  }
}