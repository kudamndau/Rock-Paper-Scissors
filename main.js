// LOGIC TO GET COMPUTER CHOICE
function getComputerChoice(items) {
  // Generate a random index between 0 and the length of the items array
  const randomIndex = Math.floor(Math.random() * items.length);

  // Return the item at the random index
  return items[randomIndex];
}

const choiceList = ["rock", "paper", "scissors"];
const computerChoice = getComputerChoice(choiceList);
console.log("Computer's choice is" + " " + computerChoice);

// LOGIC TO GET USER CHOICE
function getUserChoice() {
  // Prompt the user to input their choice
  const userInput = prompt("Welcome to Rock, Paper, Scissors. What's your choice?");
  const userChoice = userInput("rock" OR, "paper" OR, "scissors");
  
  if (isString(userChoice)) {
    console.log("Your choice is" + " " + userChoice);
  } else {
    console.log("Invalid input. Please make a choice")
  } 

  return userChoice;
}

getUserChoice()
