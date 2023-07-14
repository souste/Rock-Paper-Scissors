const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const answer = choice[Math.floor(Math.random() * choice.length)];
  return answer;
}

function playRound(playerSelection, computerSelection) {
  const lowerCase = playerSelection.toLowerCase();
  const finalCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);

  if (
    (finalCase === "Rock" && computerSelection === "Paper") ||
    (finalCase === "Paper" && computerSelection === "Scissors") ||
    (finalCase === "Scissors" && computerSelection === "Rock")
  ) {
    return `You lose! ${computerSelection} beats ${finalCase}`;
  } else if (
    (finalCase === "Rock" && computerSelection === "Scissors") ||
    (finalCase === "Paper" && computerSelection === "Rock") ||
    (finalCase === "Scissors" && computerSelection === "Paper")
  ) {
    return `You win! ${finalCase} beats ${computerSelection}`;
  } else if (finalCase === computerSelection) {
    return `You draw!`;
  } else {
    return `Please enter Rock, Paper or Scissors`;
  }
}

const computerSelection = getComputerChoice();

let score = 0;
let compScore = 0;

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Go!", "");
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
