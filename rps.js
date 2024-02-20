var computerSelection = Math.floor(Math.random() * 3);
function getComputerChoice(){
    if (computerSelection == 0) {
       computerSelection = "paper";
    } else if (computerSelection == 1) {
       computerSelection = "scissors";
    } else if (computerSelection == 2) {
      computerSelection = "rock";
    }
}
console.log("The computer chose " + computerSelection);
const playerSelection = "rock";
console.log("I chose " + playerSelection);





//function playRound(playerSelection, computerSelection) {}

