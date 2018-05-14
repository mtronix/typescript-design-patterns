import { PizzaFactory } from './PizzaFactory';

export class Pizzeria {
  private pizzaFactory: PizzaFactory;

  constructor(pizzaFactory: PizzaFactory) {
    this.pizzaFactory = pizzaFactory;
  }

  public orderPizza(type: string) {
    const pizza = this.pizzaFactory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.slice();
    pizza.pack();

    return pizza;
  }
}