import readlineSync from 'readline-sync';
import askName from './general';

const successNumber = 3;

export default (description, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = askName();
  for (let i = 0; i < successNumber; i += 1) {
    const data = getData();
    console.log(`Question: ${data.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== data.answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.answer}'`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};
