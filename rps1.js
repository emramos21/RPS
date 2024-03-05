const choice = ["rock", "paper", "scissors"]
//const winners = [];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
//const playerScore = document.getElementById("playerScore");
const resultDisplay = document.getElementById("result");

function playGame(playerChoice) {
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose " + computerSelection);
    //console.log("me" + playerDisplay)
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
resultDisplay.textContent = `Score: ${result}`;
    }
playGame();