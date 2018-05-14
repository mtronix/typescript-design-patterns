import { Flying } from './Flying';

export class FlyByWings implements Flying {
  public fly() {
    console.log('I can fly, because I have wings ;-)');
  }
}