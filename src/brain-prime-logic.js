#!/usr/bin/env node
import { sayHello } from './sayHello.js';
import { isPrime } from './index.js';

sayHello();

console.log('\nAnswer "yes" if given number is prime. Otherwise answer "no".');

isPrime();
