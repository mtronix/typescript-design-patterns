import { Singleton } from './Singleton';

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
const obj3 = Singleton.getInstance();

// Objects
console.log('obj1: ', obj1);
console.log('obj2: ', obj2);
console.log('obj3: ', obj3);

// Compare objects
console.log('obj1 === obj2: ', obj1 === obj2);
console.log('obj2 === obj3: ', obj2 === obj3);
console.log('obj3 === obj1: ', obj3 === obj1);