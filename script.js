// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign characters to their respective as variables
var numChar = "0123456789"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var specialChar ="~!@#$%^&*"

// Write password to the #password input
function writePassword() {
    var password = "";
    var i

// Set a min and max password length
    var pwLength = window.prompt ("Enter password length between 8 and 128 characters");
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
      alert ("Invalid password length.  Enter a number between 8 and 128 (inclusive)");
      return;
    }
  
// Ask user to confirm if criteria for the password
    var addnumChar = confirm ("Do you want to include numbers?")
    var addupperChar = confirm ("Do you want to include uppercase letters?")
    var addlowerChar = confirm ("Do you want to include lowercase letters?")
    var addspecialChar = confirm ("Do you want to include special characters?")

// Inform the user that the password must include one of the criteria listed above
    if (!addnumChar && !addupperChar && !addlowerChar && !addspecialChar) {
      alert ("Must include at least one type of characters!");
      return;

    }

    var chosenChars = [];

// Add a random character from each confirmed criteria
    var charCombined = "";
    if (addnumChar) {
      charCombined += numChar;
      var index = Math.floor(Math.random() * numChar.length);
      chosenChars += numChar[index];
    }
    
    console.log(numChar[index]);
    
    if (addupperChar) {
      charCombined += upperChar;
      var index = Math.floor(Math.random() * upperChar.length);
      chosenChars += upperChar[index];
    }

    console.log(upperChar[index]);

    if (addlowerChar){ 
      charCombined += lowerChar;
      var index = Math.floor(Math.random() * lowerChar.length);
      chosenChars += lowerChar[index];
    }

    console.log(lowerChar[index]);

    if (addspecialChar) {
      charCombined += specialChar;
      var index = Math.floor(Math.random() * specialChar.length);
      chosenChars += specialChar[index];
    }

// Change chosenChars (i.e., characters from the confirmed criteria) from a string to an array
    var chosenCharsArray = chosenChars.split("") 


// This is building partial password (not including chosenChars)
    for (i = 0; i < (pwLength-chosenChars.length); i++) {
      var mixchar = Math.floor(Math.random() * charCombined.length);
      password += charCombined[mixchar];

    }
// Change password (i.e., characters from the partial password above) from a string to an array
    var passwordArray = password.split(""); 
    
// Completing password by adding chosen characters (i.e.,chosenCharsArray) to the partial password (i.e.,passwordArray)    
    for (i = 0; i < chosenChars.length; i++) {
      var index = Math.floor(Math.random() * password.length);
      var mixchar = chosenCharsArray.pop(); 
      passwordArray.splice(index, 0, mixchar);
    }
 
// Change passwordArray, after combining with chosenChars, from an array to a string
    var passwordFinal = passwordArray.join("")

// Select the password id from html
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






