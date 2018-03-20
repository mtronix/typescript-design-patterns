import { Strategy } from './Strategy';

export class ConcreteStrategy2 implements Strategy {
  execute() {
    console.log('execute() method from ConcreteStrategy2');
  }
}