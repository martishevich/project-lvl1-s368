import engine from '../engine';
import { getRandomIntNumber } from '../helpers';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const getQuestion = () => getRandomIntNumber(1, 100);
const getRightAnswer = number => (isEven(number) ? 'yes' : 'no');

export default () => {
  engine(description, getQuestion, getRightAnswer);
};
