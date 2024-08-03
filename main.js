// GLOBAL SCOPE

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

//LOGIC TO PLAY GAME (5 ROUNDS)
function playGame(numberOfRounds) {
  
  //SCORE VARIABLES
  let userScore = 0; 
  let computerScore = 0;
  
    
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
        console.log("Computer wins! Rock beats scissors.");
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
        console.log("You win! Rock beats scissors.");
        return "win";
      } else {
        console.log("It's a tie, there is no winner!");
        return "tie";
      }
  }
 
  // GAME LOOP
  for (let round = 1; round <= numberOfRounds; round++) {
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice(choiceList);
    const roundResult = playRound(userSelection, computerSelection);
    console.log("Your choice is " + userSelection);
    console.log("Computer's choice is", computerSelection);
    console.log(`Round ${round}: ${roundResult}`);

    if (roundResult === "win") {
      userScore++;
    } else if (roundResult === "lose") {
      computerScore++;
    }
  }

  // Determine the final winner
  if (userScore > computerScore) {
    console.log("You win the game!");
  } else if (userScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}
const choiceList = ["rock", "paper", "scissors"];
playGame(5);