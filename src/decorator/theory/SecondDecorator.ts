import { Component } from './Component';
import { ComponentDecorator } from './ComponentDecorator';

export class SecondDecorator extends ComponentDecorator implements Component {
  methodA() {
    return `<SecondDecorator>${this.decoratedComponent.methodA()}</SecondDecorator>`;
  }

  methodB() {
    return `<SecondDecorator>${this.decoratedComponent.methodB()}</SecondDecorator>`;
  }
}