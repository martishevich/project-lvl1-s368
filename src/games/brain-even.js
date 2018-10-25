import engine from '../engine';
import getRandomIntNumber from '../helpers';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getData = () => {
  const question = getRandomIntNumber(1, 100);
  return {
    question,
    answer: isEven(question) ? 'yes' : 'no',
  };
};

export default () => {
  engine(description, getData);
};
