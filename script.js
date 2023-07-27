const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const answer = choice[Math.floor(Math.random() * choice.length)];
  return answer;
}

let playerCount = 0;
let compCount = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    playerCount += 0;
    compCount += 1;
    playerScore.innerText = playerCount;
    compScore.innerText = compCount;
    return (result.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerCount += 1;
    compCount += 0;
    playerScore.innerText = playerCount;
    compScore.innerText = compCount;
    return (result.innerText = `You win! ${playerSelection} beats ${computerSelection}. `);
  } else if (playerSelection === computerSelection) {
    playerCount += 0;
    compCount += 0;
    playerScore.innerText = playerCount;
    compScore.innerText = compCount;
    return (result.innerText = `You draw!`);
  }
}

let playerScore = document.querySelector(".player-score");
let compScore = document.querySelector(".comp-score");
let result = document.querySelector(".result");
let winner = document.querySelector(".winner");
let modal = document.querySelector(".modal-result");
let modalContent = document.querySelector(".modal-content");
let resetButton = document.querySelector(".reset-btn");

modal.style.display = "none";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    gameWinner();
  });
});

function gameWinner() {
  if (playerCount >= 5) {
    modal.style.display = "block";
    modalContent.innerText = "Well done, you are the winner!";
  } else if (compCount >= 5) {
    modal.style.display = "block";
    modalContent.innerText = "Sorry you lose";
  }
}

resetButton.addEventListener("click", restart);

function restart() {
  playerCount = 0;
  compCount = 0;
  playerScore.innerText = playerCount;
  compScore.innerText = compCount;
  result.innerText = "";
  winner.innerText = "";
  result.innerText = "ROCK PAPER SCISSORS: FIRST TO 5 WINS";
  modalContent.innerText = "";
  modal.style.display = "none";
}
