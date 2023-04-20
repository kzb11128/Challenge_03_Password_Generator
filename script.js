// Assignment Code
var generateBtn = document.querySelector("#generate");


var numChar = "0123456789"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var specialChar ="~!@#$%^&*"



// Write password to the #password input
function writePassword() {
    var password = "";
    var i

    var pwLength = window.prompt ("Enter password length between 8 and 128 characters");
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
      alert ("Invalid password length.  Enter a number between 8 and 128 (inclusive)");
      return;
    }
  
    var addnumChar = confirm ("Do you want to include numbers?")
    var addupperChar = confirm ("Do you want to include uppercase letters?")
    var addlowerChar = confirm ("Do you want to include lowercase letters?")
    var addspecialChar = confirm ("Do you want to include special characters?")

    if (!addnumChar && !addupperChar && !addlowerChar && !addspecialChar) {
      alert ("Must include at least one type of characters!");
      return;

    }

    var chosenChars = [];

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

    // Change chosenChars from a string to an array.
    var chosenCharsArray = chosenChars.split("") 

    console.log(chosenCharsArray);

    // This is building partial password
    for (i = 0; i < (pwLength-chosenChars.length); i++) {
      var mixchar = Math.floor(Math.random() * charCombined.length);
      password += charCombined[mixchar];

    }

    var passwordArray = password.split(""); 
    
    // Completing password by ensure chosen character types are included     
    for (i = 0; i < chosenChars.length; i++) {
      var index = Math.floor(Math.random() * password.length);
      var mixchar = chosenCharsArray.pop(); 
      passwordArray.splice(index, 0, mixchar);
    }
    
    var passwordFinal = passwordArray.join("")


  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






