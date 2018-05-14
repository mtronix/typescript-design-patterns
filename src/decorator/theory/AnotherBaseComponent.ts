import { Component } from './Component';

export class AnotherBaseComponent implements Component {
  public methodA() {
    return 'AnotherBaseComponent.methodA()';
  }

  public methodB() {
    return 'AnotherBaseComponent.methodB()';
  }
}