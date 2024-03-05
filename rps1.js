const choice = ["rock", "paper", "scissors"]
//const winners = [];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const playerScoreDisplay = document.getElementById("player score");
const computerScoreDisplay = document.getElementById("computer score");
const resultDisplay = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose " + computerSelection);
    let result = " ";
    if (playerChoice === computerSelection){
        console.log("tie");
        result = "tie";
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerSelection === "scissors") ? "you win" : "you lose";
                break;
            case "paper":
                result = (computerSelection === 'rock') ? "you win" : "you lose";
                break;
            case "scissors":
                result = (computerSelection === 'paper') ? "you win" : "you lose";
                break;
    }
}
playerDisplay.textContent = `Player Chose: ${playerChoice}`;
computerDisplay.textContent = `Computer Chose: ${computerSelection}`;
resultDisplay.textContent = `Result: ${result}`;

switch(result){
    case "you win":
        playerScore++;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    break;
    case "you lose":
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    break;        
}
    }
playGame();