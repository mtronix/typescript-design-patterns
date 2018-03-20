import { Context } from './Context';
import { ConcreteStrategy1 } from './ConcreteStrategy1';
import { ConcreteStrategy2 } from './ConcreteStrategy2';

let context = new Context();

let concreteStrategy1 = new ConcreteStrategy1();
let concreteStrategy2 = new ConcreteStrategy2();

// Do something with concrete strategy 1
context.setStrategy(concreteStrategy1);
context.execute();

// Do something with concrete strategy 2
context.setStrategy(concreteStrategy2);
context.execute();