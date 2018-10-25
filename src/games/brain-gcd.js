import engine from '../engine';
import { getRandomIntNumber } from '../helpers';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => (x !== 0 ? getGcd(y % x, x) : y);

const getData = () => {
  const x = getRandomIntNumber(2, 50);
  const y = getRandomIntNumber(2, 50);
  const question = `${x} ${y}`;
  const answer = getGcd(x, y).toString();
  return { question, answer };
};

export default () => {
  engine(description, getData);
};
