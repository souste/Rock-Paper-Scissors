const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const answer = choice[Math.floor(Math.random() * choice.length)];
  return answer;
}

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    playerScore += -1;
    compScore += 1;
    return (result.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore += 1;
    compScore += -1;
    return (result.innerText = `You win! ${playerSelection} beats ${computerSelection}. `);
  } else if (playerSelection === computerSelection) {
    playerScore += 0;
    compScore += 0;
    return (result.innerText = `You draw!`);
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  });
});

const result = document.querySelector(".result");
const score = document.querySelector(".score");

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
