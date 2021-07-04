// Assignment Code
var generateBtn = document.querySelector("#generate");
let useLowerCase = document.getElementById("checkIdLC");
let useUpperCase = document.getElementById("checkIdUC");
let useSpecialChars = document.getElementById("checkIdSC");
let useNumChars = document.getElementById("checkIdNC");
let numOfChars = document.getElementById("textIdNum"); // Number of characters in password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

  /************* Create array of characters to use in password ************* */
  var charset = [];
  if (useLowerCase.checked) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    charset = charset.concat(lowercase);
  }
  if (useUpperCase.checked) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    charset = charset.concat(uppercase);
  }
  if (useSpecialChars.checked) {
    // !#$%&?
    //var specialChars = "`~!@#$%^&*()-_=+".split("");
    var specialChars = "!#$%&?".split("");
    charset = charset.concat(specialChars);
  }
  if (useNumChars.checked) {
    var numChars = "1234567890".split("");
    charset = charset.concat(numChars);
  }
  console.log("charset length: ", charset.length);
  if (charset.length == 0) {
    alert("None of the checkboxes for the 4 types of characters that can be used in the password have been clicked");
    return;
  }

  let num = charset.length;
  let passw = '';
  if (num > 0)
  {
    for (var i=0; i<numOfChars.value; i++)
    {
      // Get random index from array of options
      var index = Math.floor(Math.random() * num);
      passw += charset[index];
    }  
  }
  return passw;
}

// If there is a keyup event for the text box with number of characters in password
// Enable the generate password button if the number of characters is greater than it
function EnableButton() {
  console.log("Enable button numOfChars.value: ", numOfChars.value)
  if (numOfChars.value > 5) {
    generateBtn.disabled = false;
  }
}

// Add event listener to button that causes password to be generate
generateBtn.disabled = true;
generateBtn.addEventListener("click", writePassword);
numOfChars.addEventListener("keyup", EnableButton)
