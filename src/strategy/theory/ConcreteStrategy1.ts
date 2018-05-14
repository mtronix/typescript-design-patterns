import { Strategy } from './Strategy';

export class ConcreteStrategy1 implements Strategy {
  public execute() {
    console.log('execute() method from ConcreteStrategy1');
  }
}