// Generate a random number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

let guess: number;

while (true) {
  // Get the player's guess
  guess = parseInt(prompt('Guess a number between 1 and 100'));

  // Check if the player's guess is correct
  if (guess === target) {
    console.log('You won!');
    break;
  } else if (guess > target) {
    console.log('Your guess is too high');
  } else {
    console.log('Your guess is too low');
  }
}