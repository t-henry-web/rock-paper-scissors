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

 // Function to play single round
 function playRound(humanChoice, computerChoice) {
	choice.textContent = "You chose " + humanChoice + ", computer chose " + computerChoice
	
    if (humanChoice === computerChoice) {
		outcome.textContent = "It's a tie!"
		
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ) {
            humanScore++;
            outcome.textContent = "1 point to you!";
			
    } else {
        computerScore++;
        outcome.textContent = "1 point to the computer!";
    }
	
	score.textContent = "Player: " + humanScore + " - Computer: " + computerScore;
	
	if (humanScore === winsRequired) {
		winner.textContent = winsRequired + " points! You are the winner!"; 
		disableButtons();
	}
	if (computerScore === winsRequired) {
		winner.textContent = "Opponent has " + winsRequired + " points! You lose :(";
		disableButtons();
	}
	
 }

// Disables buttons once score of 5 has been reached
function disableButtons() {
	rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// Initialise variables
let humanScore = 0;
let computerScore = 0;
const winsRequired = 5;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// Player choices
rock.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});

const results = document.querySelector(".results");
const choice = document.querySelector(".choice");
const outcome = document.querySelector(".outcome");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");