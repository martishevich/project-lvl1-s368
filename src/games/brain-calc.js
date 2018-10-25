import engine from '../engine';
import getRandomIntNumber from '../helpers';

const description = 'What is the result of the expression?';
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

const operators = ['+', '-', '*'];
const getSign = () => operators[getRandomIntNumber(0, operators.length)];

const getQuestion = () => {
  const firstNumber = getRandomIntNumber(0, 20);
  const secondNumber = getRandomIntNumber(0, 20);
  const sign = getSign();

  return `${firstNumber} ${sign} ${secondNumber}`;
};

const getData = () => {
  const question = getQuestion();
  return {
    question,
    answer: getRightAnswer(question),
  };
};

export default () => {
  engine(description, getData);
};
