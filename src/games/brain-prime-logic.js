#!/usr/bin/env node
import playGame from '../index.js';
import random from '../randomizer.js';

// Игра "Простое ли число?"
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const multiplierArr = [];

  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      multiplierArr.push(i);
    }
  }
  const result = multiplierArr.length > 2 ? 'no' : 'yes';
  return result;
};

const getDataPrime = () => {
  const randomNumber = random(1, 100);
  const correctAnswer = isPrime(randomNumber);
  const question = (`Question: ${randomNumber}\nYour answer: `);

  return [correctAnswer, question];
};

const startPrimeGame = () => playGame(getDataPrime, description);

export default startPrimeGame;
