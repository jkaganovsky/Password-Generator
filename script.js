// Assignment Code
var generateBtn = document.querySelector("#generate");

// DECLARE the variables to use in a password.
var numbers = "0123456789"
var specialChar = "!~@#$%^&*()"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// DECLARE function to 'generatePassword'.
// PROMPTS asking the user's password criteria.
function generatePassword() {

  var length = prompt("How long do you want your password to be?");

  // VERIFIES that an appropriate length is provided.
  if (length < 8 || length > 128) {
    return("ERROR!!! Please choose between 8 and 128.");
  }
  // VERIFIES that the user input for length is a number.
  if (Number.isInteger(length) === false) {
    return("ERROR!!! Please choose a valid number between 8 and 128.");
  }

  // COLLECT/CONFIRM user input.
  var isNumbers = confirm("Choose OK if you want your password to include numbers.");
  var isLower = confirm("Choose OK if you want your password to include lowercase letters.");
  var isUpper = confirm("Choose OK if you want your password to include uppercase letters.");
  var isSpecialChar = confirm("Choose OK you want your password to include special characters?");

  // VERIFIES that 1 or more criteria is selected by user.
  if (isNumbers === false && isLower === false &&
      isUpper === false && isSpecialChar === false) {
        return("ERROR!!! Choose OK to at least one criteria.");
  }

  // CREATE variables to track password and characters selected by user.
  var password = "";
  var validCharacters = "";

  console.log(length);
  console.log(isNumbers);
  console.log(isSpecialChar);
  console.log(isLower);
  console.log(isUpper);

  // GENERATE password based on user input.
  // CREATE a list of valid characters.
  // IF 'isNumbers === true' then add 'numbers' to 'validCharacters'.
  if (isNumbers === true) {
    validCharacters = validCharacters.concat(numbers);
  }

  if (isLower === true) {
    validCharacters = validCharacters.concat(lowerCase);
  }

  if (isUpper === true) {
    validCharacters = validCharacters.concat(upperCase);
  }

  if (isSpecialChar === true) {
    validCharacters = validCharacters.concat(specialChar);
  }

  // LOG to verify the string of characters selected by the user.
  console.log(validCharacters);

  // SELECT 'validCharacters' at random until password 'length' is reached.
  for (var i = 0; i < length; i++) {
    // CHOOSE a random number.
    var randomSelect = Math.floor(Math.random() * validCharacters.length);

    // CHOOSE a random character.
    var randomCharacter = validCharacters[randomSelect];

    // ADD 'randomCharacter' to the 'password'.
    password = password.concat(randomCharacter);

    // LOG to verify the string is truly selected at random.
    console.log(randomSelect);
    console.log(randomCharacter);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);