import { Component } from './Component';

export abstract class ComponentDecorator implements Component {
  protected decoratedComponent: Component;

  /**
   * You can also set decorated component in constructor
   * Setting decorated component in constructor has the advantage,
   * because we are sure that this.decoratedComponent is not undefined
   *
   * Using decorate method has advantage, because you can decorate many components with
   * the same instance of decorator by setting few components in decorate method periodically
   */
  decorate(component: Component) {
    this.decoratedComponent = component;
  }

  methodA() {
    return this.decoratedComponent.methodA();
  }

  methodB() {
    return this.decoratedComponent.methodB();
  }
}