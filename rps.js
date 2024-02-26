function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3)
    console.log("computer" + computerSelection)
    if (computerSelection < 1)
        computerSelection === 'rock'
        //console.log('rock');}
    else if (computerSelection < 2)
        computerSelection === 'paper'
        //console.log('paper');}
    else
        computerSelection === 'scissors'
        //console.log('scissors');}
    console.log(computerSelection)
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