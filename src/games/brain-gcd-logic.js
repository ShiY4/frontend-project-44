#!/usr/bin/env node
import playGame from '../index.js';
import random from '../randomizer.js';

// Игра по нахорждению НОД
const description = 'Find the greatest common divisor of given numbers.';

const getNod = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }
  return getNod(secondNum, firstNum % secondNum);
};

const getDataNod = () => {
  const randomNumberFirst = random(1, 100);
  const randomNumberSecond = random(1, 100);
  const correctAnswer = getNod(randomNumberFirst, randomNumberSecond);

  const question = (`Question: ${randomNumberFirst} ${randomNumberSecond}\nYour answer: `);
  return [correctAnswer, question];
};

const startNodGame = () => playGame(getDataNod, description);

export default startNodGame;
