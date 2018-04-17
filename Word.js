// Require Letter.js and global variables
var Letter = require("./Letter");
var newWord = "";
var newStr = [];
var finalAnswer = "";

// Word constructor with char and letterArray
var Word = function(char, letterArray) {

    this.char = char;
    this.letterArray = letterArray;

    // letterSring function to put the guessed letters together
    this.letterString = function(char, boolean) {
        
        // Call the Letter cinstructor
        newWord = new Letter(char, boolean);

        // Call the returnLetter function in the Letter constructor
        var letterString = newWord.returnLetter(char, boolean)
        
        // Call the function to convert an object to a string 
        var wordArray = showObjectQuery(this.letterArray);

        // Put initial blanks in the guessed word
        if (newStr == "") {
        
            for (var i = 0; i < wordArray.length; i++) {
                newStr[i] = "__";
            } 
        }

        // Put guessed word together
        for (var i = 0; i < wordArray.length; i++) {

            if (wordArray[i] === letterString) {
                newStr[i] = letterString;
                finalAnswer = newStr.join("");
            }
        }
        
        return finalAnswer;
    }
    
    // callGuess function to determine if the letter is in the word
    this.callGuess = function(char) {

        newGuess = new Letter(char);
        var charBool = newGuess.getChar(char, letterArray, false);
        return charBool;
    }
}

// Function to change object to string
function showObjectQuery(obj) {
    var result = "";
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            result += obj[p];
        }    
    }
    return result;
}

module.exports = Word;