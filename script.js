const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const answer = choice[Math.floor(Math.random() * choice.length)];
  return answer;
}

let playerScore = document.querySelector(".player-score");
let compScore = document.querySelector(".comp-score");

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

    console.log(playRound(playerSelection, computerSelection));
    if (playerCount === 5) {
      return (winner.innerText = "Well done, you are the winner!");
    } else if (compCount === 5) {
      return (winner.innerText = "Sorry you lose");
    }
  });
});

const result = document.querySelector(".result");
const winner = document.querySelector(".winner");

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     let playerSelection = prompt("Go!", "");
//     let computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
//   if (playerScore > compScore) {
//     console.log("WELL DONE, YOU WIN THE GAME!!");
//   } else if (compScore > playerScore) {
//     console.log("BAD LUCK, COMPUTER WINS THE GAME");
//   }
// }

// game();
