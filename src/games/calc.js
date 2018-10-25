import engine from '../engine';
import { getRandomIntNumber } from '../utils';

const description = 'What is the result of the expression?';
const getRightAnswer = (x, y, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      result = x + y;
  }
  return result.toString();
};

const operators = ['+', '-', '*'];
const getSign = () => operators[getRandomIntNumber(0, operators.length)];

const getData = () => {
  const x = getRandomIntNumber(0, 20);
  const y = getRandomIntNumber(0, 20);
  const sign = getSign();
  const question = `${x} ${sign} ${y}`;
  const answer = getRightAnswer(x, y, sign);

  return { question, answer };
};

export default () => {
  engine(description, getData);
};
