import engine from '../engine';
import getRandomIntNumber from '../utils';

const description = 'What number is missing in this progression?';
const size = 10;

const getData = () => {
  const step = getRandomIntNumber(1, 10);
  const firstNumber = getRandomIntNumber(1, 10);

  const progression = [...Array(size).keys()]
    .map(i => (firstNumber + i * step).toString());

  const hiddenNumber = getRandomIntNumber(1, size);
  const answer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return { question, answer };
};

export default () => {
  engine(description, getData);
};
