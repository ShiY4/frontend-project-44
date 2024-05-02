#!/usr/bin/env node
import playGame from '../index.js';
import random from '../randomizer.js';

// Игра "Калькулятор"
const start = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    default:
      result = firstNumber * secondNumber;
  }
  return result;
};

const getDataExpression = () => {
  const randomNumberFirst = random(1, 100);
  const randomNumberSecond = random(1, 100);
  const operatorSymbol = ['+', '-', '*'][random(1, 3) - 1];

  const correctAnswer = calculate(randomNumberFirst, randomNumberSecond, operatorSymbol);
  const question = (`Question: ${randomNumberFirst} ${operatorSymbol} ${randomNumberSecond}\nYour answer: `);

  return [correctAnswer, question];
};

const startExpressionGame = () => playGame(getDataExpression, start);

export default startExpressionGame;
