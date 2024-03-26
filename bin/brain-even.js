#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { sayHello, name } from '../src/cli.js';

sayHello();

const minNum = readlineSync.question('Wrirte min num ');
const maxNum = readlineSync.question('Wrirte max num ');

let score = 0;

console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');

const isEven = () => {
	const random = (min = +minNum, max = +maxNum) => Math.floor(Math.random() * (max - min + 1)) + min; // Создаем число
	const randomNumber = random();
	let correctAnswer = '';

	if (randomNumber % 2 === 0) {
		correctAnswer = 'yes';
	} else {
		correctAnswer = 'no';
	}

	const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

	if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
		console.log('Correct!');
		score += 1;
		if (score === 3) {
			return console.log(`Congratulations, ${name}`);
		}
		isEven();
	} else if ((randomNumber % 2 !== 0 && answer === 'yes') || (randomNumber % 2 === 0 && answer === 'no')) {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${name}`);
	} else if (answer !== 'yes' && answer !== 'no') {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        Let's try again, ${name}`);
	}// Проверка ответа и счет правильных ответов
};

isEven();
