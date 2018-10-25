import engine from '../engine';
import getRandomIntNumber from '../helpers';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const getData = () => {
  const question = getRandomIntNumber(1, 100);
  return {
    question,
    answer: getRightAnswer(question),
  };
};

export default () => {
  engine(description, getData);
};
