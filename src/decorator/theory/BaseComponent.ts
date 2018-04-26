import { Component } from './Component';

export class BaseComponent implements Component {
  methodA() {
    return 'BaseComponent.methodA()';
  }

  methodB() {
    return 'BaseComponent.methodB()';
  }
}