'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dScore0 = document.getElementById('current--0');
const dScore1 = document.getElementById('current--1');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
let scores, curentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  curentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  dScore0.textContent = 0;
  dScore1.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  player1El.classList.add('player--active');
  player0El.classList.remove('player--active');
};
init();

//generate a random number

//Rolling the dice Functionality.

btnRoll.addEventListener('click', function () {
  if (playing) {
    //randomize number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //display the dice and number.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    //check for rolled 1
    if (diceNumber !== 1) {
      curentScore += diceNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
      // dScore0.textContent = curentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //update urrent score to score.
    scores[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
