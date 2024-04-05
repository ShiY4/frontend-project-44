#!/usr/bin/env node
import { sayHello, name } from './sayHello.js';
import { random, playGame } from './index.js';

sayHello();

console.log('What is the result of the expression?');

let score = 0;

// Игра "Калькулятор"
const calc = () => {
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
      calc();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
};

calc();
