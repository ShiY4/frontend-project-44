import readlineSync from 'readline-sync';
import { sayHello, name } from './sayHello.js';

sayHello();

let score = 0;
// Функция для отображения вопроса и проверки ответа
export const playGame = (correctAnswer, answer, fn) => {
  if (answer === correctAnswer || +answer === correctAnswer) {
    console.log('Correct!');
    if (score < 2) {
      score += 1;
      fn();
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${name}!`);
    process.exit();
  }
};
