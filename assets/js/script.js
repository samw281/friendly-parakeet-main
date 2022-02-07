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
//enter the size of the password  
  var passwordSize = window.prompt("enter size of password");
// must be between 8 and 128
  if (passwordSize >= 8 && passwordSize <= 128) {
    window.alert("Your password will be " + passwordSize + " characters long" );
    passwordLength = passwordSize
  } else {
    window.alert("Your password length must be between 8 and 128. Try again");
    generatePassword()
  }
// confirm uppercase characters
var uppercase = window.confirm("Use uppercase characters?");
if (uppercase) {
  uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
}
else {
  window.alert("No uppercase.");
  uppercaseChar = []
}
// confirm lowercase characters
var lowercase = window.confirm("Use lowercase characters?");
if (lowercase) {
  lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
}
else {
  window.alert("No lowercase.");
  lowercaseChar = []
}
// confirm number characters
var num = window.confirm("Use numbers?");
if (num) {
 numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
}
else {
  window.alert("No numbers.");
  numChar = []
}
// confirm special characters. 
var special = window.confirm("Use special characters?");
if (special) {
   specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
}
else {
  window.alert("No special characters.");
  specialChar = []
}

// check that atleast one character type was selected. if not return to the beginning
if (!uppercase && !lowercase && !num && !special) {
  window.alert("Please select at least one!")
  generatePassword()
} else {}

 var characters = (uppercaseChar + lowercaseChar + numChar + specialChar);
 console.log(characters)

 for(var i = 0; i = passwordSize; i++) {
var randomPassWord = Math.floor(Math.random() * characters + 1);


  return randomPassWord;
  
}; };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
