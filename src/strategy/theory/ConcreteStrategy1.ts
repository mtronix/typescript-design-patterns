import { Strategy } from './Strategy';

export class ConcreteStrategy1 implements Strategy {
  execute() {
    console.log('execute() method from ConcreteStrategy1');
  }
}