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
    return `You lose! ${computerSelection} beats ${finalCase}. playerScore is ${playerScore}. compScore is ${compScore}`;
  } else if (
    (finalCase === "Rock" && computerSelection === "Scissors") ||
    (finalCase === "Paper" && computerSelection === "Rock") ||
    (finalCase === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore += 1;
    compScore += -1;
    return `You win! ${finalCase} beats ${computerSelection}. playerScore is ${playerScore}. compScore is ${compScore}`;
  } else if (finalCase === computerSelection) {
    return `You draw! playerScore is ${playerScore}. compScore is ${compScore}`;
  } else {
    playerScore += 0;
    compScore += 0;
    return `Please enter Rock, Paper or Scissors`;
  }
}
let playerSelection = prompt("Go!", "");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 1; i < 5; i++) {
    let playerSelection = prompt("Go!", "");
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > compScore) {
    console.log("Well done, you win");
  } else if (compScore > playerScore) {
    console.log("Bad luck, you lose");
  }
}

game();

// CURRENT ISSUES - EVERYTHING WORKS BEFORE THE FINAL PART OF THE PROBLEM
// Computer selection remains the same over 5 turns - this is the final problem, everything works when I solve this!

// CAN TRY USING A DEBUGGER
