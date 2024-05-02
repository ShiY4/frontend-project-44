#!/usr/bin/env node
import playGame from '../index.js';
import random from '../randomizer.js';

// Игра по нахорждению НОД
const start = 'Find the greatest common divisor of given numbers.';

const getNod = (firstNum, secondNum) => {
  const firstArr = [];
  const secondArr = [];
  const finalArr = [];

  for (let i = 0; i <= firstNum; i += 1) {
    if (firstNum % i === 0) {
      firstArr.push(i);
    }
  }

  for (let i = 0; i <= secondNum; i += 1) {
    if (secondNum % i === 0) {
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

  const result = finalArr.at(-1);
  return result;
};

const getDataNod = () => {
  const randomNumberFirst = random(1, 100);
  const randomNumberSecond = random(1, 100);
  const correctAnswer = getNod(randomNumberFirst, randomNumberSecond);

  const question = (`Question: ${randomNumberFirst} ${randomNumberSecond}\nYour answer: `);
  return [correctAnswer, question];
};

const startNodGame = () => playGame(getDataNod, start);

export default startNodGame;
