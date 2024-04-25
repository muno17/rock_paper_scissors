const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    roundResult.textContent = result;

    updateScore(result);
    updateScoreBoard();
});

paperButton.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    roundResult.textContent = result;

    updateScore(result);
    updateScoreBoard();
});

scissorsButton.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    roundResult.textContent = result;

    updateScore(result);
    updateScoreBoard();
});

const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");

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

function updateScore(result) {
    if (result == "l") {
        computerScore++;
    } else if (result == "w") {
        playerScore++;
    }

    return;
}

function updateScoreBoard() {
    if (playerScore == 5) {
        score.textContent = `You win!`;
    } else if (computerScore == 5) {
        score.textContent = "Computer wins!";
    } else {
        score.textContent = `Player Score: ${playerScore}   -   Computer Score: ${computerScore}`;
    }
    return;
}
