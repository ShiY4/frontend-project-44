import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

console.log(`Welcome to the Brain Games!`);

export const sayHello = () => {
    console.log(`Hello, ${name}!`);
}