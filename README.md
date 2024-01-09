# Password Generator

This simple password generator allows users to create passwords based on their preferences for length and character types.

![Screenshot Placeholder](screenshot.png)

Screenshot 2024-01-09 at 22.12.24.png

## Features

- User-defined password length between 8 and 128 characters.
- Options to include lowercase letters, uppercase letters, special characters, and numbers.
- Generates a random password based on user preferences.

## How It Works

The generator prompts the user for their desired password length and character types. Once the user provides the necessary inputs, the generator constructs a list of characters based on the selected options. It then randomly selects characters from this list to create the password.

## Code Explanation

The heart of the generator lies in the `generatePassword` function. Here's a breakdown of its functionality:

\```javascript
let chars = [];
if (options.lower) chars = chars.concat(lowerCasedCharacters);
if (options.upper) chars = chars.concat(upperCasedCharacters);
if (options.special) chars = chars.concat(specialCharacters);
if (options.numbers) chars = chars.concat(numericCharacters);
\```

This code block builds a list of characters based on the user's preferences. It checks each option and adds the corresponding characters to the `chars` array. The password is then generated using characters from this array.

## Usage

To use the password generator:

1. Open the `index.html` file in a web browser.
2. Click on the "Generate Password" button.
3. Follow the on-screen prompts to select your desired password length and character types.
4. Your generated password will be displayed in the designated area.

The website is hosted at:

https://avr99j.github.io/passwordGenerator/

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
