import readlineSync from 'readline-sync';
import { name } from './sayHello.js';

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для отображения вопроса и проверки ответа
export const playGame = (question, correctAnswer) => {
	const answer = readlineSync.question(question);
	if (answer === correctAnswer || +answer === correctAnswer) {
	  console.log('Correct!');
	} else {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
		Let's try again, ${name}!`);
		process.exit();
	}
};
