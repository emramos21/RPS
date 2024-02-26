function getComputerChoice() {
    const computerSelection = ["Rock", "Paper", "Scissors"]
    console.log(randomChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)])
};
//getComputerChoice();

function getPlayerSelection () {
   let playerSelection = prompt("Choose rock, paper, scissors")
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")
        console.log(playerSelection)
};
//getPlayerSelection();

function playRound(computerSelection, playerSelection) {
    getComputerChoice(console.log("computer" + computerSelection));
    getPlayerSelection();
   // console.log("Computer " + computerSelection + " " + "Me " + playerSelection)
    }
playRound();