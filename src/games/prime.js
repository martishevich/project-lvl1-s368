import engine from '../engine';
import { getRandomIntNumber, humanizeBoolean } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 0 && number !== 1;
};
const getData = () => {
  const question = getRandomIntNumber(1, 100);
  const answer = humanizeBoolean(isPrime(question));
  return { question, answer };
};

export default () => {
  engine(description, getData);
};
