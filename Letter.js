// Global variables
// var line = "__";
// var pos = 0;
// var newPos = 0;
var newStr = [];
// var arraySplit = [];
// Letter constructor with char and boolean
var Letter = function(charStr, boolean) {
    
    this.charStr = charStr;
    this.boolean = boolean;
    
    // returnLetter function returns a letter if it is in the word
    this.returnLetter = function(charStr, boolean) {
        
        if (this.boolean === true) {
            letterReturned = this.charStr;
            return letterReturned;
        } else {
            console.log("Sorry but that letter is not in the word");
        }
    }
    
    // getChar function determines if the char is in the word
    this.getChar = function(char, array, boolean) {
        
        // Change array object to a string
        var result = showObjectQuery(array);

        // Check to see if char is in word
        for (var i = 0; i < result.length; i++) {
            
            if (char === result[i]) {
                console.log("Char is in word");
                boolean = true;
            }
        }   
        return boolean;
    }
} 

// Function to change object to a string
function showObjectQuery(obj) {
    var result = "";
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            result += obj[p];
        }    
    }
    
    var result1 = result.split("");
    
    return result1;
}

module.exports = Letter;
  