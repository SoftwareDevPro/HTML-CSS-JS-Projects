const passwordElement = document.getElementById("passwordValue");
const copyElement = document.getElementById("copyButton");
const lengthElement = document.getElementById("lengthValue");
const upperElement = document.getElementById("upperCheckbox");
const lowerElement = document.getElementById("lowerCheckbox");
const symbolElement = document.getElementById("symbolCheckbox");
const numberElement = document.getElementById("numberCheckbox");
const generateElement = document.getElementById("generateButton");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=|";

const generatePassword = () => {
  const passwordLength = lengthElement.value;
  const useUppercase = upperElement.checked;
  const useLowercase = lowerElement.checked;
  const useNumbers = numberElement.checked;
  const useSymbols = symbolElement.checked;

  if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
    return;
  }

  let characters = "";
  if (useUppercase) {
    characters += upperLetters;
  }
  if (useLowercase) {
    characters += lowerLetters;
  }
  if (useNumbers) {
    characters += numbers;
  }
  if (useSymbols) {
    characters += symbols;
  }

  let password = "";
  for (let idx = 0; idx < passwordLength; idx++) {
    const randomIdx = Math.floor(Math.random() * characters.length);
    password += characters[randomIdx];
  }

  passwordElement.innerText = password;
};

const copyToClipboard = () => {
  const password = passwordElement.innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password).then(() => {
    copyElement.innerText = "Copied!";
    setTimeout(() => {
      copyElement.innerText = "Copy";
    }, 2000);
  });
};

lengthElement.addEventListener("input", () => {
  let passwordLength = parseInt(lengthElement.value);
  if (passwordLength < 8) {
    passwordLength = 8;
  }
  if (passwordLength > 26) {
    passwordLength = 26;
  }
  lengthElement.value = passwordLength;
});

generateElement.addEventListener("click", generatePassword);
copyElement.addEventListener("click", copyToClipboard);
