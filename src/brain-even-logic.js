#!/usr/bin/env node
import { sayHello, name } from './sayHello.js';
import { random, playGame } from './index.js';

sayHello();

console.log('\nAnswer \'yes\' if the number is even, otherwise answer \'no\'.');

let score = 0;

// Игра проверки четности числа
const isEven = () => {
	const randomNumber = random();
	const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
	if (score < 3) {
		score += 1;
		playGame(`\nQuestion: ${randomNumber}\nYour answer: `, correctAnswer);
		isEven();
	} else {
		console.log(`Congratulations, ${name}`);
	}
};

isEven();
