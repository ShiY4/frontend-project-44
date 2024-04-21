import readlineSync from 'readline-sync';
import { sayHello, name } from './sayHello.js';

sayHello();

let score = 0;
let startMessage = false;
// Функция для отображения вопроса и проверки ответа
// eslint-disable-next-line import/prefer-default-export
export const playGame = (start, correctAnswer, question, fn) => {
  if (startMessage === false) {
    console.log(start);
    startMessage = true;
  }
  const answer = readlineSync.question(question);
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
