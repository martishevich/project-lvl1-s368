import readlineSync from 'readline-sync';
import { greeting, askName } from '../helpers';

const successNumber = 3;
const isEven = number => number % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

export default () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = askName();
  for (let i = 0; i < successNumber; i += 1) {
    const question = getRandomNumber();
    const rightAnswer = getRightAnswer(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      return 0;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};
