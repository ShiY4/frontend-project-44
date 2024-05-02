import readlineSync from 'readline-sync';
import name from './sayHello.js';

// Функция для отображения вопроса и проверки ответа
const playGame = (fn, start) => {
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i += 1) {
    if (i === 0) {
      console.log(start);
    }

    const arr = fn();
    const userAnswer = readlineSync.question(arr[1]);

    if (userAnswer === arr[0] || +userAnswer === arr[0]) {
      if (i < 2) {
        console.log('Correct!');
      } else {
        console.log(`Correct!\nCongratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[0]}'.
      Let's try again, ${name}!`);
      process.exit();
    }
  }
};

export default playGame;
