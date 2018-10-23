import readlineSync from 'readline-sync';
import askName from '..';

const allowedAnswers = {
  true: 'yes',
  false: 'no',
};
const checkIsEven = number => number % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRightAnswer = number => allowedAnswers[checkIsEven(number)];
const isAnswerProhibited = answer => Object.values(allowedAnswers).indexOf(answer) === -1;

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = askName();
  const successNumber = 3;
  let guessedNumber = 0;
  while (guessedNumber !== successNumber) {
    const randomNumber = getRandomNumber();
    const rightAnswer = getRightAnswer(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isAnswerProhibited(answer) || answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      break;
    }
    console.log('Correct!');
    guessedNumber += 1;
  }
  if (guessedNumber === successNumber) {
    console.log(`Congratulations, ${name}`);
  }
};
