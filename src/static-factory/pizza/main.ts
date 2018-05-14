import { Pizzeria } from './Pizzeria';

const pizzeria = new Pizzeria();

// Order cheese pizza
const cheesePizza = pizzeria.orderPizza('cheese');
console.log('Cheese pizza: ', cheesePizza);

// Order vegetarian pizza
const vegetarianPizza = pizzeria.orderPizza('vegetarian');
console.log('Vegetarian pizza: ', vegetarianPizza);

// Order pepperoni pizza
const pepperoniPizza = pizzeria.orderPizza('pepperoni');
console.log('Pepperoni pizza: ', pepperoniPizza);