import { Flying } from './Flying';

export class Flightless implements Flying {
  public fly() {
    console.log('I can\'t fly, because I do not have wings ;-)');
  }
}