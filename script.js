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



// Function to prompt user for password options
function getPasswordOptions() {
  let pwdLength;
  do {
    pwdLength = prompt("Please enter the desired length of the password");

    if (pwdLength === null) {
      alert("Please enter an input");
      return null;
    }
    if (pwdLength < 8 || pwdLength > 128) {
      alert("Please enter length between 8 and 128 characters")
    }
  } while (pwdLength < 8 || pwdLength > 128);

  let lower = confirm("Would you like your password to contain lowercase characters?");
  let upper = confirm("Would you like your password to contain uppercase characters?");
  let special = confirm("Would you like your password to contain special characters?");
  let numbers = confirm("Would you like your password to contain numbers?");

  if (!lower && !upper && !special && !numbers) {
    alert("At least one character should be entered");
    return null;
  }

  return { pwdLength, lower, upper, special, numbers };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let arrRandom = arr[Math.floor(Math.random() * (arr.length))];
  return arrRandom;
}

// Function to generate password with user input
function generatePassword() {
  const options = getPasswordOptions();

  if (!options) {
    return null;
  }

  let chars = [];
  if (options.lower) {
    chars = chars.concat(lowerCasedCharacters);
  }
  if (options.upper) {
    chars = chars.concat(upperCasedCharacters);
  }
  if (options.special) {
    chars = chars.concat(specialCharacters);
  }
  if (options.numbers) {
    chars = chars.concat(numericCharacters);
  }

  let password = '';
  for (let i = 0; i < options.pwdLength; i++) {
    password += getRandom(chars);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector('#password');
  if (password) {
    passwordText.value = password;
  } else {
    passwordText.value = "Canceled or Invalid Selection";
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

