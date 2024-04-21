#!/usr/bin/env node
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра нахождения арифметической прогрессии
// eslint-disable-next-line import/prefer-default-export
export const startProgressionGame = () => {
  const start = 'What number is missing in the progression?';
  // Получаем число для прогрессии
  const randomLost = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;
  const progression = random(1, 100);
  const lostNumber = randomLost();
  const starProgression = random(1, 100);
  const progressionArr = [starProgression];

  for (let i = 1; i <= 9; i += 1) {
    progressionArr.push(progressionArr[i - 1] + progression);
  }

  const correctAnswer = progressionArr[lostNumber];
  progressionArr[lostNumber] = '..';

  const question = (`Question: ${progressionArr.join(' ')}\nYour answer: `);

  playGame(start, correctAnswer, question, startProgressionGame);
};
