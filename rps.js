function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection < 1) 
       console.log('rock');
    else if (computerSelection < 2) 
        console.log('paper');
    else 
       console.log('scissors');
};
getComputerChoice();

function getPlayerSelection () {
   let playerSelection = prompt("Choose a number: (1) Rock, (2) Paper, (3) Scissors")
    if (playerSelection == 1)
        console.log("rock")
    else if (playerSelection == 2)
        console.log("paper")
    else 
        console.log("scissors") 
};
getPlayerSelection();

//function playRound(computerSelection, playerSelection) {
  //  if (playerSelection === computerSelection) 
    //    console.log("Tie!")
   // else if (playerSelection === 1 && computerSelection === 2) 
     //   console.log("i win")
   // if (playerSelection === 2 && computerSelection === 3) 
     //   console.log("computer wins")
    //}
//playRound();