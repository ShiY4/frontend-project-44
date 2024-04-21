#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра проверки четности числа
export const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  const randomNumber = random(1, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

  playGame(correctAnswer, answer, isEven);
};
