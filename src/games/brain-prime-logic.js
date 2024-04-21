#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра "Простое ли число?"
export const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNumber = random(1, 100);
  const multiplierArr = [];

  for (let i = 0; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      multiplierArr.push(i);
    }
  }

  const correctAnswer = multiplierArr.length > 2 ? 'no' : 'yes';
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  playGame(correctAnswer, answer, isPrime);
};
