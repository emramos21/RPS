const computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection < 1) 
       console.log("Computer: Rock");
    else if (computerSelection < 2) 
        console.log("Computer: Paper");
    else 
       console.log("Computer: Scissors");
const playerSelection = "rock";
console.log("I chose " + playerSelection);

