import readlineSync from 'readline-sync';

const successNumber = 3;

export default (description, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  for (let i = 0; i < successNumber; i += 1) {
    const { question, answer } = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations!');
};
