#!/usr/bin/env node
import { sayHello, name } from '../sayHello.js';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

sayHello();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let score = 0;

// Игра проверки четности числа
export const isEven = () => {
  const randomNumber = random(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  if (score < 3) {
    score += 1;
    playGame(`Question: ${randomNumber}\nYour answer: `, correctAnswer);
    isEven();
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
