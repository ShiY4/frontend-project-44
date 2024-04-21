#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра нахождения арифметической прогрессии
export const isProgression = () => {
  console.log('What number is missing in the progression?');
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

  const answer = readlineSync.question(`Question: ${progressionArr.join(' ')}\nYour answer: `);

  playGame(correctAnswer, answer, isProgression);
};

