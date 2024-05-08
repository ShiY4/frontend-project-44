#!/usr/bin/env node
import playGame from '../index.js';
import random from '../randomizer.js';

// Игра "Калькулятор"
const description = 'What is the result of the expression?';

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Invalid character: '${operator}'!`);
  }
};

const getDataExpression = () => {
  const randomNumberFirst = random(1, 100);
  const randomNumberSecond = random(1, 100);
  const operatorSymbol = ['+', '-', '*'][random(1, 3) - 1];

  const correctAnswer = calculate(randomNumberFirst, randomNumberSecond, operatorSymbol);
  const question = (`Question: ${randomNumberFirst} ${operatorSymbol} ${randomNumberSecond}\nYour answer: `);

  return [correctAnswer, question];
};

const startExpressionGame = () => playGame(getDataExpression, description);

export default startExpressionGame;
