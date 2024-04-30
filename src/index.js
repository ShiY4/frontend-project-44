import readlineSync from 'readline-sync';
import { name } from './sayHello.js';

let score = 0;
let startGameMessage = false;
let startPlayMessage = false;
// Функция для отображения вопроса и проверки ответа
// eslint-disable-next-line import/prefer-default-export
export const playGame = (fn, start) => {
  if (startGameMessage === false) {
    console.log(start);
    startGameMessage = true;
  }
  if (startPlayMessage === false) {
    console.log(`Hello, ${name}!`);
    startPlayMessage = true;
  }

  const arr = fn();
  const answer = readlineSync.question(arr[1]);

  if (answer === arr[0] || +answer === arr[0]) {
    console.log('Correct!');
    if (score < 2) {
      score += 1;
      playGame(fn, start);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${arr[0]}'.
    Let's try again, ${name}!`);
    process.exit();
  }
};
