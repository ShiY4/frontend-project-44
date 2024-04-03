#!/usr/bin/env node
import { sayHello } from './sayHello.js';
import { calc } from './index.js';

sayHello();

console.log('What is the result of the expression?');

calc();
