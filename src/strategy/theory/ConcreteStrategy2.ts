import { Strategy } from './Strategy';

export class ConcreteStrategy2 implements Strategy {
  public execute() {
    console.log('execute() method from ConcreteStrategy2');
  }
}