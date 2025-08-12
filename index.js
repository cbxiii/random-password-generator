
const lengthInput = document.getElementById("lengthInput");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");


generateButton.onclick = function() {
    let password = "";
    let allowedChars = "";

    lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numberChars = "0123456789";
    symbolChars = "~-_+=,.<>()?/[]{}";

    allowedChars += includeLowercase.checked ? lowercaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked  ? numberChars : "";
    allowedChars += includeSymbols.checked ? symbolChars : "";

    let passLength = lengthInput.value;
    if (passLength <= 0) {
        result.textContent = "Please enter a length longer than 0.";
    }
    else if (allowedChars.length === 0) {
        result.textContent = "Please select at least ONE set of characters.";
    }
    else {
        console.log(allowedChars);
        for (let i = 0; i < passLength; i++) {
            randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        result.textContent = password;
    }
    
}
