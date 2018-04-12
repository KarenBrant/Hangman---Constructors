var inquirer = require('inquirer');

inquirer.prompt([

    {
      type: "input",
      name: "guess",
      message: "Guess a letter"
    }
  
]).then(function(letter) {
    console.log("in the function");
    console.log(letter.guess);
    var guess1 = letter.guess;
    
    console.log ("Letter: " + guess1);
    var line = "__";
    
    var Letter = function(wordStr, boolean) {
        this.wordStr = wordStr;
        this.boolean = boolean;
        
        this.returnLetter = function() {
            if (this.boolean === true) {
                console.log("this.wordStr: " + wordStr);
                return this.wordStr;
            } else {
                console.log("line is being returned");
                return line;
            }
        }
        this.getChar = function(char) {
            console.log ("char: " + char);
            console.log ("wordStr: " + wordStr);
            if (char === wordStr) {
                console.log("a = a");
                this.boolean = true;;
            } else {
                console.log("boolean: " + boolean);
            }
        }
    };    
    var letter1 = new Letter("b", false);
    letter1.getChar(guess1);
    letter1.returnLetter();
});

// module.exports = Letter;
  