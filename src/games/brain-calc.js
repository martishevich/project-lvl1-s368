import readlineSync from 'readline-sync';
import { greeting, askName } from '../helpers';

const successNumber = 3;
const getRightAnswer = (question) => {
  const questionArray = question.split(' ');
  const firstNumber = parseInt(questionArray[0], 10);
  const sign = questionArray[1];

  const secondNumber = parseInt(questionArray[2], 10);
  let result;
  switch (sign) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      result = firstNumber + secondNumber;
  }
  return result.toString();
};

const getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const allowedOperations = ['+', '-', '*'];

const getSign = () => allowedOperations[getRandomIntNumber(0, 3)];
const getQuestion = () => {
  const firstNumber = getRandomIntNumber(0, 20);
  const secondNumber = getRandomIntNumber(0, 20);
  const sign = getSign();

  return `${firstNumber} ${sign} ${secondNumber}`;
};

export default () => {
  greeting();
  console.log('What is the result of the expression?');
  const name = askName();
  for (let i = 0; i < successNumber; i += 1) {
    const question = getQuestion();
    const rightAnswer = getRightAnswer(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
  return 0;
};
