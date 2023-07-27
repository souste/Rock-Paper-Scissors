const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const answer = choice[Math.floor(Math.random() * choice.length)];
  return answer;
}

let playerScore = document.querySelector(".player-score");
let compScore = document.querySelector(".comp-score");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");

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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerCount === 5) {
      alert((winner.innerText = "Well done, you are the winner!"));
      restart();
    } else if (compCount === 5) {
      alert((winner.innerText = "Sorry you lose"));
      restart();
    }
  });
});

function restart() {
  playerCount = 0;
  compCount = 0;
  playerScore.innerText = playerCount;
  compScore.innerText = compCount;
  result.innerText = "";
  winner.innerText = "";
}

// SHould the winner message make everything else disappear??
// Need a reset button!
// Can probably remove the code from the buttons reset bit and apply it to a reset button
