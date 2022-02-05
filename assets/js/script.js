// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
 
  var passwordSize = window.prompt("enter size of password");

  if (passwordSize >= 8 && passwordSize <= 128) {
    window.alert("Your password will be " + passwordSize + " characters long" );
  } else {
    window.alert("Your password length must be between 8 and 128. Try again");
    generatePassword()
  }

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"] 
  





  return "password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
