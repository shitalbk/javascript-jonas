'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 90;
document.querySelector('.score').textContent = 50;
document.querySelector('.guess').value = 34;
console.log(document.querySelector('.guess').value);
*/
/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

// Selects random number from 1-20
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//Check button implementation
function check() {
  document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //Checks the guessed number from the input box
    if (!guess) {
      displayMessage('⚡️ No Number!!!');
    }
    // Checks if number is correct to the input box
    else if (guess === secretNumber) {
      displayMessage('🐶 Correct Number!!!');

      // Loads the number in the UI
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#f25a58';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    }
    // Checks if the number is not equal
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('🙀 You lost the Game!!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });
}
check();
function again() {
  document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
  });
}
again();
