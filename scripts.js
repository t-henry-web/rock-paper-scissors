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

 console.log("Computer choice: " + getComputerChoice())

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

 // Test usage
console.log(playRound(getHumanChoice(), getComputerChoice())); 
console.log("Human score: " + humanScore); 
console.log("Computer score: " + computerScore);