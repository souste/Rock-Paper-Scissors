const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const answer = choice[Math.floor(Math.random() * choice.length)];
  return answer;
}

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
  const lowerCase = playerSelection.toLowerCase();
  const finalCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);

  if (
    (finalCase === "Rock" && computerSelection === "Paper") ||
    (finalCase === "Paper" && computerSelection === "Scissors") ||
    (finalCase === "Scissors" && computerSelection === "Rock")
  ) {
    playerScore += -1;
    compScore += 1;
    return `You lose! ${computerSelection} beats ${finalCase}.`;
  } else if (
    (finalCase === "Rock" && computerSelection === "Scissors") ||
    (finalCase === "Paper" && computerSelection === "Rock") ||
    (finalCase === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore += 1;
    compScore += -1;
    return `You win! ${finalCase} beats ${computerSelection}. `;
  } else if (finalCase === computerSelection) {
    playerScore += 0;
    compScore += 0;
    return `You draw!`;
  } else {
    // can remove this bit when buttons are created
    playerScore += 0;
    compScore += 0;
    return `Please enter Rock, Paper or Scissors`;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Go!", "");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > compScore) {
    console.log("WELL DONE, YOU WIN THE GAME!!");
  } else if (compScore > playerScore) {
    console.log("BAD LUCK, COMPUTER WINS THE GAME");
  }
}

game();
