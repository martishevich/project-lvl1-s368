import engine from '../engine';
import getRandomIntNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getData = () => {
  const question = getRandomIntNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => {
  engine(description, getData);
};
