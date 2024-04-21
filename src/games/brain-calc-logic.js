#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра "Калькулятор"
export const expressionResult = () => {
  console.log('What is the result of the expression?');

  let randomNumberFirst = random(1, 100);
  let randomNumberSecond = random(1, 100);
  let operatorSymbol = ['+', '-', '*'][random(1, 3) - 1];
  let correctAnswer;
  // eslint-disable-next-line default-case
  switch (operatorSymbol) {
    case '+':
      correctAnswer = randomNumberFirst + randomNumberSecond;
      break;
    case '-':
      correctAnswer = randomNumberFirst - randomNumberSecond;
      break;
    case '*':
      correctAnswer = randomNumberFirst * randomNumberSecond;
      break;
  };
  const answer = readlineSync.question(`Question: ${randomNumberFirst} ${operatorSymbol} ${randomNumberSecond}\nYour answer: `);
  playGame(correctAnswer, answer, expressionResult);
};



