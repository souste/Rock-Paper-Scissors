console.log("Hey there!");

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
  } else if (
    (finalCase === "Rock" && computerSelection === "Rock") ||
    (finalCase === "Paper" && computerSelection === "Paper") ||
    (finalCase === "Scissors" && computerSelection === "Scissors")
  ) {
    return `You draw!`;
  }
}

const playerSelection = "PaPeR";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
