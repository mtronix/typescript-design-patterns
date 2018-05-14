import { Espresso } from './Espresso';
import { HeavilyRoasted } from './HeavilyRoasted';
import { Chocolate } from './Chocolate';
import { WhippedCream } from './WhippedCream';
import { Decaffeinated } from './Decaffeinated';
import { Milk } from './Milk';
import { StarCafeSpecial } from './StarCafeSpecial';
import { SoyMilk } from './SoyMilk';

// Espresso
const espresso = new Espresso();
console.log(`Espresso price: ${espresso.getPrice()}`);


// Heavily roasted coffee with doubled chocolate and whipped cream
let heavilyRoasted = new HeavilyRoasted();

heavilyRoasted = new Chocolate(heavilyRoasted);     // Add chocolate
heavilyRoasted = new Chocolate(heavilyRoasted);     // Add second portion of chocolate
heavilyRoasted = new WhippedCream(heavilyRoasted);  // Add whipped cream

console.log(`Heavily roasted coffee with doubled chocolate and whipped cream price: ${heavilyRoasted.getPrice()}`);


// Decaffeinated coffee with milk
let decaffeinated = new Decaffeinated();

decaffeinated = new Milk(decaffeinated);            // Add milk

console.log(`Decaffeinated coffee with milk price: ${decaffeinated.getPrice()}`);

// Star Cafe special with soy milk
let starCafeSpecial = new StarCafeSpecial();

starCafeSpecial = new SoyMilk(starCafeSpecial);     // Add soy milk

console.log(`Star Cafe special with soy milk price: ${starCafeSpecial.getPrice()}`);