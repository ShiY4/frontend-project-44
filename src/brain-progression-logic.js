#!/usr/bin/env node
import { sayHello, name } from './sayHello.js';
import { random, playGame } from './index.js';

sayHello();

console.log('What number is missing in the progression?');

let score = 0;

// Игра нахождения арифметической прогрессии
const isProgression = () => {
	// Получаем число для прогрессии
	const randomLost = (min = 0, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;
	const progression = random(1, 100);
	const lostNumber = randomLost();
	const starProgression = random(1, 100);
	const progressionArr = [starProgression];

	for (let i = 1; i <= 9; i += 1) {
		progressionArr.push(progressionArr[i - 1] + progression);
	}

	const correctAnswer = progressionArr[lostNumber];
	progressionArr[lostNumber] = '..';

	if (score < 3) {
		score += 1;
		playGame(`Question: ${progressionArr.join(' ')}\nYour answer: `, correctAnswer);
		isProgression();
	} else {
		console.log(`Congratulations, ${name}!`);
	}
};

isProgression();
