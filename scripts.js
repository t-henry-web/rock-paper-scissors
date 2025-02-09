 // Function to generate computer choice
 function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.3333333333333333) {
        return "rock";
    } else if (x <= 0.6666666666666667) {
        return "paper";
    } else {
        return "scissors";
    }
 }

 // Function to take user choice and return it
 function getHumanChoice() {
    let rawChoice = prompt('Choose "rock", "paper" or "scissors"');
    return rawChoice.toLowerCase();
 }

 // Initialise score variables
 var humanScore = 0;
 var computerScore = 0;

 // Function to play single round
 function playRound(humanChoice, computerChoice) {
    console.log("You chose " + humanChoice)
    console.log("Computer chose " + computerChoice)
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ) {
            humanScore++;
            return ("You win! " + humanChoice + " beats " + computerChoice);     
    } else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
 }

// Main game function, plays however many rounds put into function
function playGame(rounds) {
    let i = 0;
    while (i<rounds) {
        console.log("Game " + (i + 1));
        console.log(playRound(getHumanChoice(), getComputerChoice())); 
        console.log("Human score: " + humanScore); 
        console.log("Computer score: " + computerScore);
        i++;
    }
}

// Call playGame function to play 5 rounds
playGame(5);

// Declare winner
console.log("Final score:");
if (humanScore > computerScore) {
    console.log("You win!!! " + humanScore + " to " + computerScore);
} else if (humanScore < computerScore) {
    console.log("You lose!!! " + humanScore + " to " + computerScore);
} else {
    console.log("It's a tie!!! " + humanScore + " all");
}


