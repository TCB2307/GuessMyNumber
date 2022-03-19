"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 14;

document.querySelector(".guess").value = 12;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let newScore = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const score = function () {
  newScore = document.querySelector(".score").textContent;
  newScore--;
  document.querySelector(".score").textContent = newScore;

  if (newScore < 1) {
    newScore = 0;
    document.querySelector(".score").textContent = newScore;
    displayMessage(`😢 You lost the game!`);
  }
  console.log(newScore);
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (newScore > highScore) {
      highScore = newScore;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is outside of range
  } else if (guess > 20 || guess < 1) {
    score();
    displayMessage(`Guess between 1 and 20`);

    // When guess is wrong
  } else {
    score();
    displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
  }
});

// Reset button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
