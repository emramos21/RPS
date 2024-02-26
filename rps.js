function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    let computerSelection = choice[Math.floor(Math.random() * choice.length)]
    console.log("computer chose " + computerSelection)
};
function getPlayerSelection () {
   const playerSelection = prompt("Choose rock, paper, scissors")
    if (playerSelection === 'paper' || playerSelection === 'rock' || playerSelection === 'scissors')
        console.log("you chose " + playerSelection)
    else 
        console.log("error")
   console.log(playerSelection)
};
getComputerChoice();
getPlayerSelection();
function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper')
        console.log("you lose")
    else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors')
        console.log("you win")
    else 
        console.log("tie")
}
playRound();