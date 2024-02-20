function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection < 1) 
       console.log("Computer: Rock");
    else if (computerSelection < 2) 
        console.log("Computer: Paper");
    else 
       console.log("Computer: Scissors");
};
getComputerChoice()

function getPlayerSelection () {
    let playerSelection = prompt("Choose a number: (1) Rock, (2) Paper, (3) Scissors");
    if (playerSelection == 1)
        console.log("Me: Rock")
    else if (playerSelection == 2)
        console.log("Me: Paper")
    else (playerSelection == 3)
        console.log("Me: Scissors")
}
getPlayerSelection();