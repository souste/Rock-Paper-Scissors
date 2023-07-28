function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const compChoice = choice[Math.floor(Math.random() * choice.length)];
  if (compChoice === "Rock") {
    document.getElementById("computer-choice").src = "./images/RockChoice.PNG";
  } else if (compChoice === "Paper") {
    document.getElementById("computer-choice").src = "./images/paperChoice.png";
  } else if (compChoice === "Scissors") {
    document.getElementById("computer-choice").src =
      "./images/scissorsChoice.png";
  }
  return compChoice;
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
    playerScoreBox.setAttribute("style", "background: red");
    compScoreBox.setAttribute(
      "style",
      "background: green; transform: scale(1.2)"
    );
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
    playerScoreBox.setAttribute(
      "style",
      "background: green; transform: scale(1.2)"
    );
    compScoreBox.setAttribute("style", "background: red");
    return (result.innerText = `You win! ${playerSelection} beats ${computerSelection}. `);
  } else if (playerSelection === computerSelection) {
    playerCount += 0;
    compCount += 0;
    playerScore.innerText = playerCount;
    compScore.innerText = compCount;
    playerScoreBox.setAttribute("style", "background: lightgrey");
    compScoreBox.setAttribute("style", "background: lightgrey");
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
let playerChoice = document.querySelector(".player-choice");
let playerScoreBox = document.querySelector(".player-score-box");
let compScoreBox = document.querySelector(".comp-score-box");

modal.style.display = "none";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerSelection === "Rock") {
      document.getElementById("player-choice").src = "./images/RockChoice.PNG";
    } else if (playerSelection === "Paper") {
      document.getElementById("player-choice").src = "./images/paperChoice.png";
    } else if (playerSelection === "Scissors") {
      document.getElementById("player-choice").src =
        "./images/scissorsChoice.png";
    }

    gameWinner();
  });
});

function playerSelectImage() {}

function gameWinner() {
  if (playerCount >= 5) {
    modal.style.display = "block";
    document.getElementById("result-image").src = "./images/RockWinner.PNG";
    modalContent.innerText = "Well done, you are the winner!";
  } else if (compCount >= 5) {
    modal.style.display = "block";
    document.getElementById("result-image").src = "./images/RockLoser.PNG";
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
  document.getElementById("player-choice").src = "./images/Start.PNG";
  document.getElementById("computer-choice").src = "./images/Start2.PNG";
  playerScoreBox.setAttribute("style", "background: lightgrey");
  compScoreBox.setAttribute("style", "background: lightgrey");
}
