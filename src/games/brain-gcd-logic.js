#!/usr/bin/env node
import { sayHello, name } from '../sayHello.js';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

sayHello();

console.log('Find the greatest common divisor of given numbers.');

let score = 0;

// Игра по нахорждению НОД
export const isNod = () => {
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
  if (score < 3) {
    score += 1;
    playGame(`Question: ${randomNumberFirst} ${randomNumberSecond}\nYour answer: `, correctAnswer);
    isNod();
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
