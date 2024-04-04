#!/usr/bin/env node
import { sayHello } from './sayHello.js';
import { isProgression } from './index.js';

sayHello();

console.log('\nWhat number is missing in the progression?');

isProgression();
