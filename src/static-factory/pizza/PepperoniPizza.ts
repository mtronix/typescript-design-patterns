import { Pizza } from './Pizza';

export class PepperoniPizza implements Pizza {
  public prepare() {
    console.log('Preparing pepperoni pizza');
  }

  public bake() {
    console.log('Baking pepperoni pizza');
  }

  public slice() {
    console.log('Slicing pepperoni pizza');
  }

  public pack() {
    console.log('Packing pepperoni pizza');
  }
}