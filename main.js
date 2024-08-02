// GLOBAL SCOPE
let userScore = 0; 
let computerScore = 0;

// LOGIC TO GET USER CHOICE
function getUserChoice() {
  let userInput = prompt("Welcome to Rock, Paper, Scissors. What's your choice?");

   // Function to validate user input
   function isValidChoice(choice) {
    const validChoices = ["rock", "paper", "scissors"];
    // Convert input to lowercase
    const lowercaseChoice = choice.toLowerCase(); 
    return validChoices.includes(lowercaseChoice);
  }

  // Validate the user input
  while (!isValidChoice(userInput)) {
    userInput = prompt("Invalid choice. Please enter rock, paper, or scissors.");
  }
  console.log("Your choice is " + userInput);
  // Ensure consistent case for comparison
  return userInput.toLowerCase(); 
}

// LOGIC TO GET COMPUTER CHOICE
function getComputerChoice(items) {
  // Generate a random index between 0 and the length of the items array
  const randomIndex = Math.floor(Math.random() * items.length);   

  // Return the item at the random index
  return items[randomIndex];
}

const choiceList = ["rock", "paper", "scissors"];
const computerInput = getComputerChoice(choiceList);
console.log("Computer's choice is", computerInput);

//LOGIC TO PLAY A ROUND
function playRound(userChoice, computerChoice) {
  // Check all possible combinations of userChoice and computerChoice

  if (userChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("Computer wins! Paper beats rock.");
      return "lose";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("Computer wins! Rock beats scissors.");
      return "lose";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("Computer wins! Scissors beats rock.");
      return "lose";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      userScore++;
      console.log("You win! Paper beats rock.");
      return "win";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
      userScore++;
      console.log("You win! Rock beats scissors.");
      return "win";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      userScore++;
      console.log("You win! Scissors beats rock.");
      return "win";
    } else {
      console.log("It's a tie, there is no winner!");
      return "tie";
    }
}

const userSelection = getUserChoice();
const computerSelection = computerInput;

playRound(userSelection, computerSelection);
