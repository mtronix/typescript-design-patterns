import { Pizza } from './Pizza';

export class VegetarianPizza implements Pizza {
  public prepare() {
    console.log('Preparing vegetarian pizza');
  }

  public bake() {
    console.log('Baking vegetarian pizza');
  }

  public slice() {
    console.log('Slicing vegetarian pizza');
  }

  public pack() {
    console.log('Packing vegetarian pizza');
  }
}