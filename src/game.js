import readlineSync from 'readline-sync';

export const welcome = (intro = '') => {
  console.log(`Welcome to the Brain Games!\n${intro}`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  return username;
};

export const createGame = () => (intro, toDo, askUser, genArgs) => {
  const username = welcome(intro);

  for (let count = 0; count < 3;) {
    const args = genArgs();

    const result = toDo(args);
    const answer = askUser(args);

    switch (result === answer) {
      case true:
        console.log('Correct!');
        count += 1;
        break;
      default:
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${username}!`);
        count = 0;
        break;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
