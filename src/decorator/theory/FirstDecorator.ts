import { Component } from './Component';
import { ComponentDecorator } from './ComponentDecorator';

/**
 * Because we created separate abstract class for decorators (ComponentDecorator),
 * you can omit some methods in this decorator (for example you want to chane behaviour of only one method)
 */
export class FirstDecorator extends ComponentDecorator implements Component {
  methodA() {
    return `<FirstDecorator>${this.decoratedComponent.methodA()}</FirstDecorator>`;
  }

  methodB() {
    return `<FirstDecorator>${this.decoratedComponent.methodB()}</FirstDecorator>`;
  }
}