import { Quacking } from './Quacking';

export class LoudQuack implements Quacking {
  public quack() {
    console.log('quack, Quack, QUACK!!! I can quack very loud');
  }
}