#!/usr/bin/env node
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра "Простое ли число?"
// eslint-disable-next-line import/prefer-default-export
export const startPrimeGame = () => {
  const start = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNumber = random(1, 100);
  const multiplierArr = [];

  for (let i = 0; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      multiplierArr.push(i);
    }
  }

  const correctAnswer = multiplierArr.length > 2 ? 'no' : 'yes';
  const question = (`Question: ${randomNumber}\nYour answer: `);
  playGame(start, correctAnswer, question, startPrimeGame);
};
