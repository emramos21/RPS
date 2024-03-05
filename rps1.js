const choice = ["rock", "paper", "scissors"]
const winners = [];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

function playGame() {
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose " + computerSelection);
};
playGame();