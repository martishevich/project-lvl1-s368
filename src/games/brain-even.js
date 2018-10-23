import readlineSync from 'readline-sync';
import { greeting, askName } from '../helpers';

const successNumber = 3;
const checkIsEven = number => number % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const getRightAnswer = number => (checkIsEven(number) ? 'yes' : 'no');

export default () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = askName();
  let guessedNumber = 0;
  for (guessedNumber = 0; guessedNumber < successNumber; guessedNumber += 1) {
    const question = getRandomNumber();
    const rightAnswer = getRightAnswer(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      break;
    }
    console.log('Correct!');
  }
  if (guessedNumber === successNumber) {
    console.log(`Congratulations, ${name}`);
  }
};
