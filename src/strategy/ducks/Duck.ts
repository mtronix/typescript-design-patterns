import { Flying } from './Flying';
import { Quacking } from './Quacking';

export class Duck {
  protected flying: Flying;
  protected quacking: Quacking;

  setFlying(flying: Flying) {
    this.flying = flying;
  }

  getFlying() {
    return this.flying;
  }

  setQuacking(quacking: Quacking) {
    this.quacking = quacking;
  }

  getQuacking() {
    return this.quacking;
  }

  fly() {
    this.flying.fly();
  }

  quack() {
    this.quacking.quack();
  }

  swim() {
    console.log('swim() every duck can swim');
  }

  show() {
    console.log('show() every duck can be shown');
  }
}