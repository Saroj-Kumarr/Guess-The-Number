"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log("saroj");

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector("body").style.backgroundColor = "#" + randomColor;
  console.log(document.querySelectorAll(".bg"));

  const randColor = Math.floor(Math.random() * 16777215).toString(16);
  const allBtn = document.querySelectorAll(".bg");

  allBtn.forEach((btn) => {
    btn.style.backgroundColor = "#" + randColor;
  });
  // document.querySelectorAll(".bg").style.backgroundColor = "#" + randColor;

  // When user don't enter number
  if (!guess) {
    document.querySelector(".message").textContent = "Please! Enter a number🔢";
  } // When number is not equal to secret number
  else if (guess !== number) {
    if (score >= 1) {
      document.querySelector(".message").textContent =
        guess > number ? "Too high👇" : "Too low👇";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Sorry! You lost the game🥺";
    }
  } else {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector(".message").textContent = "You won 🏆";

    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right,#006666,#00cc99,#006666)";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
  }
});

// Restart the new game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  document.querySelector(".score").textContent = score;

  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem";
});
