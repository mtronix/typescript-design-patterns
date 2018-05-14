import { Component } from './Component';

export class BaseComponent implements Component {
  public methodA() {
    return 'BaseComponent.methodA()';
  }

  public methodB() {
    return 'BaseComponent.methodB()';
  }
}