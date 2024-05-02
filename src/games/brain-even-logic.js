#!/usr/bin/env node
import playGame from '../index.js';
import random from '../randomizer.js';

// Игра проверки четности числа
const start = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const getDataEven = () => {
  const randomNumber = random(1, 100);
  const correctAnswer = isEven(randomNumber);
  const question = (`Question: ${randomNumber}\nYour answer: `);

  return [correctAnswer, question];
};

const startEvenGame = () => playGame(getDataEven, start);

export default startEvenGame;
