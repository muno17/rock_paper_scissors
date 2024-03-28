function getComputerChoice() {
    // randomly return either rock, paper or scissors
    let randomizer = Math.floor(Math.random() * 10);
    let choice;

    if (randomizer <= 3) {
        choice = "Rock";
    } else if (randomizer > 3 && randomizer <= 6) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let roundResult;

    if (
        (playerSelection === "rock" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Scissors") ||
        (playerSelection === "scissors" && computerSelection == "Rock")
    ) {
        roundResult = "l";
    } else if (
        (playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "paper" && computerSelection === "Rock") ||
        (playerSelection === "scissors" && computerSelection == "Paper")
    ) {
        roundResult = "w";
    } else {
        roundResult = "t";
    }

    return roundResult;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        
        if (roundResult === 'w') {
            playerScore++;
        } else if (roundResult === 'l') {
            computerScore++;
        }

        console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log(`You win ${playerScore} to ${computerScore}!`)
    } else if (computerScore > playerScore) {
        console.log(`You lose ${computerScore} to ${playerScore} :(`)
    } else {
        console.log("Tie game!")
    }
}
