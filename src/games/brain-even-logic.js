#!/usr/bin/env node
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра проверки четности числа
const start = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataEven = () => {
  const randomNumber = random(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = (`Question: ${randomNumber}\nYour answer: `);

  return [correctAnswer, question];
};
// eslint-disable-next-line import/prefer-default-export
export const startEvenGame = () => playGame(getDataEven, start);
