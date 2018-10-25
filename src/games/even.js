import engine from '../engine';
import { getRandomIntNumber, humanizeBoolean } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getData = () => {
  const question = getRandomIntNumber(1, 100);
  const answer = humanizeBoolean(isEven(question));
  return { question, answer };
};

export default () => {
  engine(description, getData);
};
