import { Flying } from './Flying';
import { Quacking } from './Quacking';

export class Duck {
  protected flying: Flying;
  protected quacking: Quacking;

  public setFlying(flying: Flying) {
    this.flying = flying;
  }

  public getFlying() {
    return this.flying;
  }

  public setQuacking(quacking: Quacking) {
    this.quacking = quacking;
  }

  public getQuacking() {
    return this.quacking;
  }

  public fly() {
    this.flying.fly();
  }

  public quack() {
    this.quacking.quack();
  }

  public swim() {
    console.log('swim() every duck can swim');
  }

  public show() {
    console.log('show() every duck can be shown');
  }
}