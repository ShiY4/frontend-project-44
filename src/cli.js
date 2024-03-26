import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');

export const sayHello = () => console.log(`Hello, ${name}!`);
