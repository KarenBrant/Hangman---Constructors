var Word = require("./Word");
var inquirer = require('inquirer');
var count = 0;
var compPick = [];
var returnRes = "";

var randomWordArray = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid",
"fishhook", "fjord", "gazebo", "gypsy", "haiku", "haphazard", "hyphen", "ivory", "jazzy", "jiffy", "jinx", "jukebox"]
var computerPick = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
// console.log(computerPick);

// The user gets 20 guesses.
var letterGuess = function() {

    if (count < 20) {
        
        inquirer.prompt([
        
            {
              type: "input",
              name: "guess",
              message: "Guess a letter"
            }

            ]).then(function(letter) {
                console.log("Guess: " + letter.guess);
                var guess = letter.guess;
                
                // Call the Word constructor
                var checkGuess = new Word(guess, computerPick);
                
                // Call the callGuess function in the Word constructor
                var result = checkGuess.callGuess(guess);
                
                // Call the letterString function in the Word constructor
                returnRes = checkGuess.letterString(guess, result);
                console.log("Guessed word so far: " + returnRes);
                
                // Test to see if the guess is complete or if the count is 20
                if (computerPick == returnRes) {
                    console.log("Correct!!");
                    count = 20;
                } else {
                    count++;
                    if (count === 20) {
                        console.log("Sorry you used up all of your tries.")
                    } else {
                        letterGuess();
                    }
                }
            });           
    }
}
// Call the function to begin to guess
letterGuess();
