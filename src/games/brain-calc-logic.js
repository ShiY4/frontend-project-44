#!/usr/bin/env node
import { sayHello, name } from '../sayHello.js';
import { playGame } from '../index.js';
import { random } from '../randomizer.js';

sayHello();

console.log('What is the result of the expression?');

let score = 0;

// Игра "Калькулятор"
export const expressionResult = () => {
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

  if (score < 3) {
    score += 1;
    playGame(`Question: ${randomNumberFirst} ${operatorSymbol} ${randomNumberSecond}\nYour answer: `, correctAnswer);
    expressionResult();
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
