import { PizzaFactory } from './PizzaFactory';

export class Pizzeria {
  public orderPizza(type: string) {
    const pizza = PizzaFactory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.slice();
    pizza.pack();

    return pizza;
  }
}