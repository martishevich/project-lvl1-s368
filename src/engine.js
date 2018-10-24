import readlineSync from 'readline-sync';
import { greeting, askName } from './helpers';

const successNumber = 3;

export default (description, getQuestion, getRightAnswer) => {
  greeting();
  console.log(description);
  const name = askName();
  for (let i = 0; i < successNumber; i += 1) {
    const question = getQuestion();
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
