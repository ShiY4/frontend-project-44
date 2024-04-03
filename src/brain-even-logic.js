#!/usr/bin/env node
import { sayHello } from './sayHello.js';
import { isEven } from './index.js';

sayHello();

console.log('\nAnswer \'yes\' if the number is even, otherwise answer \'no\'.');

isEven();
