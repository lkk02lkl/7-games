const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDispaly = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;

possibleChoices.forEach(
  possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDispaly.innerHTML = userChoice;
  }
));