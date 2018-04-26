import { BaseComponent } from './BaseComponent';
import { AnotherBaseComponent } from './AnotherBaseComponent';

import { FirstDecorator } from './FirstDecorator';
import { SecondDecorator } from './SecondDecorator';

let component = new BaseComponent();

// Decorate component with FirstDecorator
const firstDecorator = new FirstDecorator();
firstDecorator.decorate(component);
component = firstDecorator;

// Decorate component with SecondDecorator
const secondDecorator = new SecondDecorator();
secondDecorator.decorate(component);
component = secondDecorator;


console.log('component methodA(): ', component.methodA());
console.log('component methodB(): ', component.methodB());


delete this.component;


// Reuse instances of our decorators to decorate another component
// We can only do this if we make sure that before the work is finished and the decorator instances are not used
let anotherComponent = new AnotherBaseComponent();

// Decorate anotherComponent by reusing FirstDecorator instance
firstDecorator.decorate(anotherComponent);
anotherComponent = firstDecorator;

// Decorate anotherComponent by reusing SecondDecorator instance
secondDecorator.decorate(anotherComponent);
anotherComponent = secondDecorator;

console.log('anotherComponent methodA(): ', anotherComponent.methodA());
console.log('anotherComponent methodB(): ', anotherComponent.methodB());