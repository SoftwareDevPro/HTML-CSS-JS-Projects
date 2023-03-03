const passwordElement = document.getElementById("passwordValue") as HTMLSpanElement;
const copyElement = document.getElementById("copyButton") as HTMLButtonElement;
const lengthElement = document.getElementById("lengthValue") as HTMLInputElement;
const upperElement = document.getElementById("upperCheckbox") as HTMLInputElement;
const lowerElement = document.getElementById("lowerCheckbox") as HTMLInputElement;
const symbolElement = document.getElementById("symbolCheckbox") as HTMLInputElement;
const numberElement = document.getElementById("numberCheckbox") as HTMLInputElement;
const generateElement = document.getElementById("generateButton") as HTMLButtonElement;

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=|";

const generatePassword = (): void => {
  const passwordLength = lengthElement.valueAsNumber;
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

const copyToClipboard = (): void => {
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
  let passwordLength = parseInt(lengthElement.value, 10);
  if (passwordLength < 8) {
    passwordLength = 8;
  }
  if (passwordLength > 26) {
    passwordLength = 26;
  }
  lengthElement.value = passwordLength.toString();
});

generateElement.addEventListener("click", generatePassword);
copyElement.addEventListener("click", copyToClipboard);
