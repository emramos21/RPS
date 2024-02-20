const computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection < 1) 
       console.log("Rock");
    else if (computerSelection < 2) 
        console.log("Paper");
    else 
       console.log("Scissors");
const playerSelection = "rock";
console.log("I chose " + playerSelection);

