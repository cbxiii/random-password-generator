
const lengthInput = document.getElementById("lengthInput");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");
const resultContainer = document.getElementById("resultContainer");
const copyButton = document.getElementById("copyButton");

copyButton.style.display = "none";

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
    else if (passLength >= 30) {
        result.textContent = "Please enter a length shorter than 30.";
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
        copyButton.style.display = "inline-block";
    }
    
}

const copyText = async () => {
    try {
        // Get the generated password text
        const passwordText = result.textContent;
        
        // Check if there's actually a password to copy (not an error message)
        if (passwordText && !passwordText.includes("Please")) {
            // Use the modern Clipboard API
            await navigator.clipboard.writeText(passwordText);
            
            // Provide user feedback - change button temporarily
            const originalHTML = copyButton.innerHTML;
            copyButton.innerHTML = '<span style="color: green;">✓ Copied!</span>';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                copyButton.innerHTML = originalHTML;
            }, 2000);
            
        } else {
            console.warn("No valid password to copy");
        }
    } catch (err) {
        // Fallback for older browsers or if clipboard API fails
        console.error('Failed to copy using Clipboard API, trying fallback:', err);
        fallbackCopyText();
    }
};