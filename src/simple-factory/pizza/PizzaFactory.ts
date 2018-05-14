import { Pizza } from './Pizza';
import { CheesePizza } from './CheesePizza';
import { VegetarianPizza } from './VegetarianPizza';
import { PepperoniPizza } from './PepperoniPizza';

export class PizzaFactory {
  public createPizza(type: string) {
    let pizza: Pizza;

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;

      case 'vegetarian':
        pizza = new VegetarianPizza();
        break;

      case 'pepperoni':
        pizza = new PepperoniPizza();
        break;

      default:
        throw new Error('Unsupported type of pizza');
    }

    return pizza;
  }
}