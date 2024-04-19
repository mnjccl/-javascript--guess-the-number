'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const secretNumber = document.querySelector('.secret-number');
const userInput = document.querySelector('.user-input');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const messageEl = document.querySelector('.message');

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(randomNumber);

const printMessage = function (message, rem, ad) {
  messageEl.innerHTML = message;
  messageEl.classList.remove(rem);
  messageEl.classList.add(ad);
};

setTimeout(() => {
  printMessage('Start Guessing...');
}, 1500);

checkBtn.addEventListener('click', () => {
  if (userInput.value) {
    if (+userInput.value !== randomNumber) {
      if (score > 1) {
        score--;
        scoreEl.innerHTML = `💯 Score: ${score}`;
        userInput.value > randomNumber
          ? printMessage('Too high! Try again.', 'correct', 'wrong')
          : printMessage('Too low! Try again.', 'correct', 'wrong');
      } else {
        printMessage('You lost the game!', 'wrong', 'lost');
        secretNumber.classList.add('lose');
        score = 0;
        scoreEl.innerHTML = `💯 Score: ${score}`;
        secretNumber.innerHTML = randomNumber;
      }
    } else if (+userInput.value === randomNumber) {
      printMessage(`You're correct! Great!`, 'wrong', 'correct');
      secretNumber.classList.add('win');
      secretNumber.innerHTML = randomNumber;
      if (score > highscore) {
        highscore = score;
        highscoreEl.innerHTML = `🥇 Highscore: ${highscore}`;
      }
    }
  } else {
    printMessage(`Please, enter the number.`);
  }
});

againBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreEl.innerHTML = `💯 Score: ${score}`;
  printMessage('Start Guessing...');
  userInput.value = '';
  secretNumber.innerHTML = '?';
  messageEl.classList.remove('wrong');
  messageEl.classList.remove('correct');
  messageEl.classList.remove('lost');
  secretNumber.classList.remove('win');
  secretNumber.classList.remove('lose');
});
