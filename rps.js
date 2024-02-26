let choice = ['Rock', 'Paper', 'Scissors']
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
    //return input;
    console.log(input)
    return input;
};
function getComputerSelection(){
    return choice[Math.floor(Math.random() * choice.length)]
};
function checkWinner(playerC, compC) {
    if (playerC === compC){
        console.log("tie")
        return "tie";
    } else if(
        (playerC === "rock" && compC === "scissors") || 
        (playerC === 'paper' && compC === 'rock') || 
        (playerC === 'scissors' && compC === 'paper')) {
        console.log("you lose i win")
        return "you lose i win"
    } else {
        console.log("you win")
        return "you win"
    }
};
play();