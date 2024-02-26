function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"]
    let computerSelection = choice[Math.floor(Math.random() * choice.length)]
    //console.log("computer chose " + computerSelection)
};
//getComputerChoice();

function getPlayerSelection () {
   const playerSelection = prompt("Choose rock, paper, scissors")
    if (playerSelection === "paper" || playerSelection === "rock" || playerSelection === "scissors")
        console.log("you chose " + playerSelection)
    else 
        console.log("error")
   //console.log(playerSelection)
};
//getComputerChoice();
//getPlayerSelection();
//const winner = playRound(getComputerChoice, getPlayerSelection);

function playRound(computerSelection, playerSelection) {
   // getComputerChoice();
    //getPlayerSelection();
    console.log("Computer " + computerSelection) 
    console.log("Me " + playerSelection)
}
getComputerChoice();
getPlayerSelection();
playRound();