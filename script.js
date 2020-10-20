// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added function syntax when generateBtn is triggered.
function generatePassword() {
    // Prompts
    var length = prompt("How long do you want your password to be (between 8 and 128)?");
    var numbers = confirm("Do you want your password to include numbers?");
    var lowerCase = confirm("Do you want your password to include lowercase letters?");
    var upperCase = confirm("Do you want your password to include uppercase letters?");
    var characters = confirm("Do you want your password to include special characters?");

    // Console.log
    console.log(length);
    console.log(numbers);
    console.log(characters);
    console.log(lowerCase);
    console.log(upperCase);

    // If the user selects to include numbers
    if (numbers) {
      Math.floor((Math.random() * 9) +1)
    }

    // Else if the user selects to include lowerCase letters

    // Else if the user selects to include upperCase letters

    // Else if the user selects to include special characters

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
