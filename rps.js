let choice = ['rock', 'paper', 'scissors']
for (let i = 0; i < 4; i++) {
    playGame()
}
function playGame() {
    playRound();
}
function playRound() {
    const playerSelection = getPlayerSelection()
    const computerSelection = getComputerSelection()
    const winner = checkWinner(playerSelection, computerSelection)
    console.log(winner);
}
function getPlayerSelection () {
    const input = prompt("Choose rock, paper, scissors")
    console.log("I chose " + input)
    return input;
};
function getComputerSelection(){
    computerSelection = choice[Math.floor(Math.random() * choice.length)]
    console.log("Computer chose " + computerSelection)
    return computerSelection;
    
};
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("tie")
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
playGame();