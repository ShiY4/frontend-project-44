#!/usr/bin/env node
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

// Игра "Калькулятор"
const start = 'What is the result of the expression?';

const getDataExpression = () => {
  const randomNumberFirst = random(1, 100);
  const randomNumberSecond = random(1, 100);
  const operatorSymbol = ['+', '-', '*'][random(1, 3) - 1];
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
  }
  const question = (`Question: ${randomNumberFirst} ${operatorSymbol} ${randomNumberSecond}\nYour answer: `);
  return [correctAnswer, question];
};
// eslint-disable-next-line import/prefer-default-export
export const startExpressionGame = () => playGame(getDataExpression, start);
