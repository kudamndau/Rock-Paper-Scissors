// LOGIC TO GET COMPUTER CHOICE
function getComputerChoice(items) {
  // Generate a random index between 0 and the length of the items array
  const randomIndex = Math.floor(Math.random() * items.length);

  // Return the item at the random index
  return items[randomIndex];
}

const choiceList = ["rock", "paper", "scissors"];
const computerChoice = getComputerChoice(choiceList);
console.log("Computer's choice is " + computerChoice);

// LOGIC TO GET USER CHOICE
function getUserChoice() {
  let userInput = prompt("Welcome to Rock, Paper, Scissors. What's your choice?");

  // Function to validate user input
  function isValidChoice(choice) {
    // Check if the input is one of the valid options
    return choice === "rock" || choice === "paper" || choice === "scissors";
  }

  // Validate the user input
  while (!isValidChoice(userInput)) {
    userInput = prompt("Invalid choice. Please enter rock, paper, or scissors.");
  }

  console.log("Your choice is " + userInput);
  return userInput;
}
getUserChoice();
