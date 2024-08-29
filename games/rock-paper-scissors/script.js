function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  document.getElementById(
    "user-choice"
  ).innerText = `Your Choice: ${userChoice}`;
  document.getElementById(
    "computer-choice"
  ).innerText = `Computer's Choice: ${computerChoice}`;
  document.getElementById("game-result").innerText = `Result: ${result}`;
}

document
  .getElementById("rock")
  .addEventListener("click", () => playGame("Rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("Paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("Scissors"));
