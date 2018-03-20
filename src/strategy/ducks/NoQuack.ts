import { Quacking } from './Quacking';

export class NoQuack implements Quacking {
  quack() {
    console.log('I can\'t quack');
  }
}