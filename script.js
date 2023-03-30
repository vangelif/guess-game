'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 5;
// document.querySelector('.message').textContent = 'Yuuuuhuuuu Number!';
// document.querySelector('.score').textContent = '10!';

// document.querySelector('.guess').value = 3324;
// console.log(document.querySelector('.guess').value);

document.querySelector('.click').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!!';
    // document.querySelector('.message').style.color = white;
    // score -= 1;
    // document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'THAT IS A CORRECT GUESS!!!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'powderblue';
    document.querySelector('.number').style.width = '80%';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your guess is too high!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your guess is too low!!';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  }

  // else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Your guess is too low!!';
  //   score -= 1;
  //   document.querySelector('.score').textContent = score;
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  // console.log(document.querySelector('.number'));
  document.querySelector('.message').textContent = 'Pick a number...';
  score = 5;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '??';
  document.querySelector('body').style.backgroundColor = 'bisque';
  document.querySelector('.number').style.width = '45%';
});
