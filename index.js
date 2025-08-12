
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let password = "";
    let allowedChars = "";

    lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numberChars = "0123456789";
    symbolChars = "~-_+=,.<>()?/[]{}";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        console.log("Please enter a length longer than 0.");
        return "";
    }
    if (allowedChars.length === 0) {
        console.log("Please select at least ONE set of characters.");
        return "";
    }

    for (let i = 0; i < length; i++) {
        randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const length = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);