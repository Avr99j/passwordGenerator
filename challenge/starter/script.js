// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let pwdLength;
let lower;
let upper;
let special;
let password;



// let lowerCharLength = Math.floor(Math.random() * (lowerCasedCharacters.length))
// console.log(lowerCharLength)

// do {

//   length = prompt("Please enter the desired length of the password");

//   if (length === null) {
//     alert("Operation cancelled by user");
//     break;
//   }

//   if ((length < 8) || (length > 128)) {
//     alert("The length should be between 8 and 128 characters");
//   }

// } while ((length < 8) || (length > 128));

// lower = confirm("Would you like your password to contain lowercase characters?");

// if (lower === true) {
//   var lowerChar = lowerCasedCharacters[Math.floor(Math.random() * (lowerCasedCharacters.length))];
//   return lowerChar.concat(password);
// }
// upper = confirm("Would you like your password to contain uppercase characters?")

// if (upper === true) {
//   var upperChar = upperCasedCharacters[Math.floor(Math.random() * (upperCasedCharacters.length))];
// }

// special = confirm("Would you like your password to contain special characters?")

// Function to prompt user for password options
function getPasswordOptions() {

  do {
    pwdLength = prompt("Please enter the desired length of the password");

    if (length === null) {
      alert("Please enter an input");
    }
    else if ((length < 8) || (length > 128)) {
      alert("Please enter length between 8 and 128 characters")
    }
  } while ((length < 8) || (length > 128));

  lower = confirm("Would you like your password to contain lowercase characters?");
  upper = confirm("Would you like your password to contain uppercase characters?");
  special = confirm("Would you like your password to contain special characters?");

  return pwdLength, lower, upper, special;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let arrRandom = arr[Math.floor(Math.random() * (arr.length))];
  return arrRandom;
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

