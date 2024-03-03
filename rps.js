const choice = ["rock", "paper", "scissors"]
const winners = [];

function playGame() {
    for (let i = 0; i < 5; i++) {
    playRound(); 
    }
    keepScore();
}
function playRound() {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerSelection();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    //return winner;
}
function getPlayerSelection () {
    const input = prompt("Choose rock, paper, scissors");
    console.log("I chose " + input);
    return input;
};
function getComputerSelection(){
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log("Computer chose " + computerSelection);
    return computerSelection;
};
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("tie");
        return "tie";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return "i win"
    } else {
        return "computer wins"
    }
};
function keepScore() {
    let playerWins = winners.includes("i win");
    let computerWins = winners.includes("computer wins");
    let ties = winner.includes("tie");
    console.log("player wins:" + playerWins);
    console.log("computer wins:"+ computerWins);
    console.log("ties:" + ties);
    console.log(winners)
};
playGame();


