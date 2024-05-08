import readlineSync from 'readline-sync';
import name from './sayHello.js';

// Функция для отображения вопроса и проверки ответа
const playGame = (fn, description) => {
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, question] = fn();
    const userAnswer = readlineSync.question(question);

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
