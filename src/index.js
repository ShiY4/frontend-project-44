import readlineSync from 'readline-sync';
import { name } from './sayHello.js';

const minNum = readlineSync.question('Wrirte min num: ');
const maxNum = readlineSync.question('Wrirte max num: ');

const random = (min = +minNum, max = +maxNum) => Math.floor(Math.random() * (max - min + 1)) + min;

let score = 1;

// Игра проверки числа на четность
export const isEven = () => {
	// Счет правильных ответов
	const scoreTimer = () => {
		if (score === 3) {
			return console.log(`Congratulations, ${name}`);
		}
		console.log(score);
		score += 1;
		isEven();
		return score;
	};

	const randomNumber = random();
	let correctAnswer = '';

	if (randomNumber % 2 === 0) {
		correctAnswer = 'yes';
	} else {
		correctAnswer = 'no';
	}

	const answer = readlineSync.question(`\nQuestion: ${randomNumber}\nYour answer: `);

	// Проверка ответа
	if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) { // Если ответ верный
		console.log('Correct!');
		scoreTimer();
	} else if ((randomNumber % 2 !== 0 && answer === 'yes') || (randomNumber % 2 === 0 && answer === 'no')) { // Если ответ неверный
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${name}`);
	}
};

// Игра "Калькулятор"
export const calc = () => {
	// Счетчик правильных ответов
	const scoreTimer = () => {
		if (score === 3) {
			return console.log(`Congratulations, ${name}`);
		}
		score += 1;
		calc();
		return score;
	};

	// Создаем два операнда
	const randomNumberFirst = random();
	const randomNumberSecond = random();
	let correctAnswer = ''; // Переменная для правильного ответа, которая используется в сравнении при проверке ответа
	let operatorSymbol = ''; // Переменная, в которую помещается оператор

	// Получаем номер для оператора
	const randomOperator = (min = 1, max = 3) => Math.floor(Math.random() * (max - min + 1)) + min;
	const operator = randomOperator();

	// Выводим правильный ответ, который ожидаем от пользователя
	if (operator === 1) {
		correctAnswer = randomNumberFirst + randomNumberSecond;
		operatorSymbol = '+';
	} else if (operator === 2) {
		correctAnswer = randomNumberFirst - randomNumberSecond;
		operatorSymbol = '-';
	} else {
		correctAnswer = randomNumberFirst * randomNumberSecond;
		operatorSymbol = '*';
	}

	const answer = readlineSync.question(`\nQuestion: ${randomNumberFirst} ${operatorSymbol} ${randomNumberSecond}\nYour answer: `);

	// Проверка ответа
	if ((correctAnswer === +answer)) { // Если ответ верный
		console.log('Correct!');
		scoreTimer();
	} else { // Если ответ неверный
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${name}`);
	}
};
