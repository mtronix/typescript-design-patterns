import { Quacking } from './Quacking';

export class NoQuack implements Quacking {
  public quack() {
    console.log('I can\'t quack');
  }
}