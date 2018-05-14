import { Component } from './Component';
import { ComponentDecorator } from './ComponentDecorator';

export class SecondDecorator extends ComponentDecorator implements Component {
  public methodA() {
    return `<SecondDecorator>${this.decoratedComponent.methodA()}</SecondDecorator>`;
  }

  public methodB() {
    return `<SecondDecorator>${this.decoratedComponent.methodB()}</SecondDecorator>`;
  }
}