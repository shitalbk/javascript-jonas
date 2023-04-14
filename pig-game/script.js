'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let playerScore = 0;
let activePlayer = 0;
let newScore = 0;
let checker = true;

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const buttonRoll = function() {
  if (checker) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for roll 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
};
const buttonHold = function() {
  if (checker) {
    if (activePlayer === 0) {
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore + newScore;
      newScore += currentScore;
    } else {
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore + playerScore;
      playerScore += currentScore;
    }
    checkWinner();
    switchPlayer();
  }
};
const checkWinner = function() {
  if (newScore >= 100 || playerScore >= 100) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    checker = false;
    diceEl.classList.add('hidden');
    
  }
};
const buttonNewGame = function(){
  console.log('New Game!!!');
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    checker = true;
    currentScore = 0;
};

btnRoll.addEventListener('click', buttonRoll);
btnHold.addEventListener('click', buttonHold);
btnNew.addEventListener('click', buttonNewGame);
