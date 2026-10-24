// Game scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Available choices
const choices = ["rock", "paper", "scissors"];

// Get HTML elements
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const drawScoreDisplay = document.getElementById("draw-score");

const choiceButtons = document.querySelectorAll(".choice");
const resetButton = document.getElementById("reset-btn");

// Play the game when a choice button is clicked
choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

// Main game function
function playGame(playerChoice) {

    // Generate a random computer choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Display choices
    playerChoiceDisplay.textContent = formatChoice(playerChoice);
    computerChoiceDisplay.textContent = formatChoice(computerChoice);

    // Compare choices
    if (playerChoice === computerChoice) {

        resultMessage.textContent = "🤝 It's a Draw!";
        drawScore++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        resultMessage.textContent = "🎉 You Win!";
        playerScore++;

    } else {

        resultMessage.textContent = "💻 Computer Wins!";
        computerScore++;

    }

    // Update the scoreboard
    updateScore();
}

// Capitalize the choice name
function formatChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Update scores on the page
function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    drawScoreDisplay.textContent = drawScore;
}

// Reset the game
resetButton.addEventListener("click", function() {

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    playerChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    resultMessage.textContent = "Choose your move!";

    updateScore();
});