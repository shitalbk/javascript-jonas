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


const buttonRoll = function() {
  console.log('Button is clicked!!!');
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for roll 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    console.log("Current Score " +  currentScore);
    
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};
const buttonHold = function() {
  console.log('Hold Button');
  
    console.log("Current Score " +  currentScore);
    
    console.log("Player Score " + playerScore);
    
    if(activePlayer === 0){
      document.getElementById(`score--${activePlayer}`).textContent = currentScore + newScore;
      newScore+= currentScore;
    }
     else{
      document.getElementById(`score--${activePlayer}`).textContent = currentScore + playerScore;
      playerScore+= currentScore;
    }
    
    //playerScore = Number(document.getElementById(`score--${activePlayer}`).textContent);
    console.log("Player Value is "+ playerScore);
    
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // current player value set to zero
        currentScore = 0;
       // playerScore = 0;
    // switch player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    console.log("Current Score " +  currentScore);

};

btnRoll.addEventListener('click', buttonRoll);
btnHold.addEventListener('click', buttonHold);
