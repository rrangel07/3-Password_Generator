// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
function generatePassword(){
  
  var numChar, numTypes;
  var chars= {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",

  };
  console.log(chars.upperCase.charAt[0]);
  function increase (x,y){
    if(x == true){
      y++;
    }
    return (y);
  }

  do{
    numChar= prompt("Ingrese la cantidad de caracteres que desea para su contraseña (8-128)");
    if (numChar <= 7 || numChar >= 129) {
      alert("Your password must have min 8 characters and max 128");
    }
  } while (numChar <= 7 || numChar >= 129);

  do{
    numTypes = 0;
    let lowerCase= confirm("Would you like to include lowercase elements?");
    numTypes = increase (lowerCase,numTypes);
    let upperCase = confirm("Would you like to include uppercase elements?");
    numTypes = increase (upperCase,numTypes);
    let numbers = confirm("Would you like to include numbers?");
    numTypes = increase (numbers,numTypes);
    let specialChar = confirm("Would you like to include special characters?");
    numTypes = increase (specialChar,numTypes);
    if (numTypes == 0){
      alert("Your password must include at least one type of characters");
    }

  } while (numTypes <1);
}