import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export const getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
