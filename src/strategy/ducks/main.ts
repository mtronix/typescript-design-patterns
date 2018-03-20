import { Duck } from './Duck';
import { FlyByWings } from './FlyByWings';
import { Flightless } from './Flightless';
import { LoudQuack } from './LoudQuack';
import { NoQuack } from './NoQuack';

let duck = new Duck();

// Flying
let flyByWings = new FlyByWings();
let flightless = new Flightless();

// Quacking
let loudQuack = new LoudQuack();
let noQuack = new NoQuack();

// Show duck
duck.show();

// Swim
duck.swim();

// Flightless duck
duck.setFlying(flightless);
duck.fly();

// No quacking duck
duck.setQuacking(noQuack);
duck.quack();

// Fly by wings
duck.setFlying(flyByWings);
duck.fly();

// Loud quack
duck.setQuacking(loudQuack);
duck.quack();