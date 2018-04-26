import { Component } from './Component';

export class AnotherBaseComponent implements Component {
  methodA() {
    return 'AnotherBaseComponent.methodA()';
  }

  methodB() {
    return 'AnotherBaseComponent.methodB()';
  }
}