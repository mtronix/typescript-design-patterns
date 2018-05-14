import { Pizza } from './Pizza';

export class CheesePizza implements Pizza {
  public prepare() {
    console.log('Preparing cheese pizza');
  }

  public bake() {
    console.log('Baking cheese pizza');
  }

  public slice() {
    console.log('Slicing cheese pizza');
  }

  public pack() {
    console.log('Packing cheese pizza');
  }
}