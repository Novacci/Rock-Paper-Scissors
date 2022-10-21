const computerPointsSpan = document.getElementById('computerHeader');
const playerPointsSpan = document.getElementById('playerHeader');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultsHeader = document.getElementById('resultsHeader');
const roundResults = document.getElementById('roundResults');
const restartBtn = document.getElementById('restart');

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function gameResult() {
  if (playerScore === 5) {
    roundResults.innerHTML = 'Congratulations, You won!';
    roundResults.style.color = 'green';
  } else if (computerScore === 5) {
    roundResults.innerHTML = 'Game Over, Computer won!';
    roundResults.style.color = 'red';
  }
}

function playRound(computerChoice, playerChoice) {
  const computerChoiceDisplay = choiceDisplay(computerChoice);
  const playerChoiceDisplay = choiceDisplay(playerChoice);
  if (computerChoice === playerChoice) {
    roundWinner = 'Tie';
    roundResults.innerHTML = "It's a Tie";
  }
  if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    roundResults.textContent = `You win! ${playerChoiceDisplay} beats ${computerChoiceDisplay}!`;
    roundWinner = 'player';
  }
  if (
    (computerChoice === ROCK && playerChoice === SCISSORS) ||
    (computerChoice === PAPER && playerChoice === ROCK) ||
    (computerChoice === SCISSORS && playerChoice === PAPER)
  ) {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    roundResults.textContent = `You lose! ${computerChoiceDisplay} beats ${playerChoiceDisplay}!`;
    roundWinner = 'computer';
  }

  gameResult();
  gameOver();
}

function resetScore() {
  location.reload();
}

rockButton.addEventListener('click', () => {
  playRound(getComputerChoice(), ROCK);
});
scissorsButton.addEventListener('click', () => {
  playRound(getComputerChoice(), SCISSORS);
});
paperButton.addEventListener('click', () => {
  playRound(getComputerChoice(), PAPER);
});
restartBtn.addEventListener('click', () => {
  resetScore();
});

function gameOver() {
  if (playerScore === 5 || computerScore === 5) {
    document.getElementById('paperButton').disabled = true;
    document.getElementById('scissorsButton').disabled = true;
    document.getElementById('rockButton').disabled = true;
  }
}

function choiceDisplay(choice) {
  switch (choice) {
    case ROCK:
      return 'Rock';
    case PAPER:
      return 'Paper';
    case SCISSORS:
      return 'Scissors';
  }
}
