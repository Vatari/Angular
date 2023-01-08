// Generate a random number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

let guess: number;

process.stdin.setEncoding('utf8');
process.stdout.write('Guess a number between 1 and 100: ');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    // Convert the input to a number and store it in the `guess` variable
    guess = parseInt(chunk.trim());

    // Check if the player's guess is correct
    if (guess === target) {
      console.log('You won!');
      process.exit();
    } else if (guess > target) {
      console.log('Your guess is too high');
    } else {
      console.log('Your guess is too low');
    }

    // Prompt the player to enter another guess
    process.stdout.write('Guess a number between 1 and 100: ');
  }
});