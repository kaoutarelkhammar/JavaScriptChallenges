

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make player's choice case-insensitive
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to play the game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Call the game function to start playing
game();
