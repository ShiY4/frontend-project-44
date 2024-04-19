#!/usr/bin/env node
import { sayHello, name } from '../sayHello.js';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

sayHello();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let score = 0;

// Игра "Простое ли число?"
export const isPrime = () => {
  const randomNumber = random(1, 100);
  const multiplierArr = [];

  for (let i = 0; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      multiplierArr.push(i);
    }
  }

  const correctAnswer = multiplierArr.length > 2 ? 'no' : 'yes';
  if (score < 3) {
    score += 1;
    playGame(`Question: ${randomNumber}\nYour answer: `, correctAnswer);
    isPrime();
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
