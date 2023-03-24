// Variables for the passwords
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate password
function generatePassword() {
  var password = "";
  var allowed = "";

  // Password length priompt 
  var length = prompt("Enter password length (between 8 and 128 characters):");
  if (length < 8 || length > 128) {
    alert("Invalid attempt. Please enter length 12 or more.");
    return "";
  }

  // Prompt user for password criteria
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecials = confirm("Include special characters?");

  // will prompt a message if no character type is selected
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecials) {
    alert("Must select one or more character types");
    return "";
  }

  // adds the selected choices together
  if (useLowercase) { allowed += lowercase; }
  if (useUppercase) { allowed += uppercase; }
  if (useNumbers) { allowed += numbers; }
  if (useSpecials) { allowed += specials; }

  for (var i = 0; i < length; i++) {
    password += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }

  return password;
}

var generateBtn = document.querySelector("#generate");

// generates the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// allows Create Password button to function
generateBtn.addEventListener("click", writePassword);