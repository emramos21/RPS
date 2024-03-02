let choice = ['rock', 'paper', 'scissors']
function play() {
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
        console.log("you lose i win")
        return "you lose i win"
    } else {
        //console.log("you win")
        return "you win"
    }
};
play();