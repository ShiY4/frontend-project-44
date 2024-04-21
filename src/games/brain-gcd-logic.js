#!/usr/bin/env node
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра по нахорждению НОД
// eslint-disable-next-line import/prefer-default-export
export const startNodGame = () => {
  const start = 'Find the greatest common divisor of given numbers.';

  const randomNumberFirst = random(1, 100);
  const randomNumberSecond = random(1, 100);
  const firstArr = [];
  const secondArr = [];
  const finalArr = [];

  for (let i = 0; i <= randomNumberFirst; i += 1) {
    if (randomNumberFirst % i === 0) {
      firstArr.push(i);
    }
  }

  for (let i = 0; i <= randomNumberSecond; i += 1) {
    if (randomNumberSecond % i === 0) {
      secondArr.push(i);
    }
  }

  if (firstArr.length > secondArr.length) {
    for (let j = 0; j <= secondArr.length; j += 1) {
      if (firstArr.includes(secondArr[j])) {
        finalArr.push(secondArr[j]);
      }
    }
  } else {
    for (let j = 0; j <= firstArr.length; j += 1) {
      if (secondArr.includes(firstArr[j])) {
        finalArr.push(firstArr[j]);
      }
    }
  }

  const correctAnswer = finalArr.at(-1);
  const question = (`Question: ${randomNumberFirst} ${randomNumberSecond}\nYour answer: `);
  console.log(correctAnswer);
  playGame(start, correctAnswer, question, startNodGame);
};
