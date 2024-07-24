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
