import { Pizzeria } from './Pizzeria';
import { PizzaFactory } from './PizzaFactory';

const pizzaFactory = new PizzaFactory();

const pizzeria = new Pizzeria(pizzaFactory);

// Order cheese pizza
const cheesePizza = pizzeria.orderPizza('cheese');
console.log('Cheese pizza: ', cheesePizza);

// Order vegetarian pizza
const vegetarianPizza = pizzeria.orderPizza('vegetarian');
console.log('Vegetarian pizza: ', vegetarianPizza);

// Order pepperoni pizza
const pepperoniPizza = pizzeria.orderPizza('pepperoni');
console.log('Pepperoni pizza: ', pepperoniPizza);