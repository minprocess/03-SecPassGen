// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  /************* User Inputs to control what is in password ************* */
  let useLowerCase = document.getElementById("checkIdLC");
  let useUpperCase = document.getElementById("checkIdUC");
  let useSpecialChars = document.getElementById("checkIdSC");
  let useNumChars = document.getElementById("checkIdNC");
  let NumOfChars = document.getElementById("textIdNum"); // Number of characters in password
  console.log("    ");
  console.log("    ");
  console.log("Secure Password Generator");
  console.log("useLowerCase checkbox state", useLowerCase.checked);
  console.log("useUpperCase checkbox state", useUpperCase.checked);
  console.log("useSpecialChars checkbox state", useSpecialChars.checked);
  console.log("useNumChars checkbox state", useNumChars.checked);
  console.log("NumChar", NumOfChars.value);  // number of characters in password

  /************* Create array of characters to use in password ************* */
  var charset = [];
  if (useLowerCase.checked) {
    var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    //var lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    charset = charset.concat(lowercase);
    console.log("In generatePassword, useLowerCase is checked, charset.length = ",charset.length)
  }
  if (useUpperCase.checked) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    charset = charset.concat(uppercase);
    console.log("In generatePassword, useUpperCase is checked, charset.length = ",charset.length)
  }
  if (useSpecialChars.checked) {
    var specialChars = "`~!@#$%^&*()-_=+".split("");
    charset = charset.concat(specialChars);
    console.log("In generatePassword, useSpecialChars is checked, charset.length = ",charset.length)
  }
  if (useNumChars.checked) {
    var numChars = "1234567890".split("");
    charset = charset.concat(numChars);
    console.log("In generatePassword, useNumChars is checked, charset.length = ",charset.length)
  }

  let num = charset.length;
  let passw = '';
  if (num > 0)
  {
    for (var i=0; i<NumOfChars.value; i++)
    {
      // Get random index from array of options
      var index = Math.floor(Math.random() * num);
      passw += charset[index];
    }  
  }
  return passw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

