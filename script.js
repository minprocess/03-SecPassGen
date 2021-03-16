// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  let UseLC = document.getElementById("checkIdLC");
  let UseUC = document.getElementById("checkIdUC");
  let UseSC = document.getElementById("checkIdSC");
  let UseNum = document.getElementById("checkIdNum");
  let NumChar = document.getElementById("textIdNum");
  console.log("UseLC", UseLC.checked);
  console.log("UseUC", UseUC.checked);
  console.log("UseSC", UseSC.checked);
  console.log("UseNum", UseNum.checked);
  console.log("NumChar", NumChar.value);
  var charset = [];
  if (UseLC.checked) {
    var lc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    charset = charset.concat(lc);
    console.log("In generatePassword, UseLC is checked, charset.length = ",charset.length)
  }
  if (UseUC.checked) {
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    charset = charset.concat(uc);
    console.log("In generatePassword, UseUC is checked, charset.length = ",charset.length)
  }
  if (UseSC.checked) {
    var sc = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    charset = charset.concat(sc);
    console.log("In generatePassword, UseSC is checked, charset.length = ",charset.length)
  }
  if (UseNum.checked) {
    var numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    charset = charset.concat(numb);
    console.log("In generatePassword, UseNum is checked, charset.length = ",charset.length)
  }

  let num = charset.length;
  let passw = '';
  if (num > 0)
  {
    for (var i=0; i<NumChar.value-1; i++)
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


console.log("length of a ", a.length)
console.log("lc[0] = ", lc[0]);
console.log("lc[", a.length-1, "] = ",lc[a.length-1]);
