console.log("Hello World");
// Number gassuing game
// Language: javascript
let winningNumber = 15;
let guess = prompt("Guess a number between 1 and 20");



    if (guess == winningNumber) {
        alert("You win!");
      } else {
        if (guess > winningNumber) {
          alert("Too high");
        } else {
          alert("Too low");
        }
      }

// Number guessing game