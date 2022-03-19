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
var exp;
// The following function gets from the user the number of characters they'd like fro their password.
function gettingNumOfChar (){
  var numChar;
  do{
    numChar= prompt("Ingrese la cantidad de caracteres que desea para su contraseña (8-128)");
    if (numChar <= 7 || numChar >= 129) {
      alert("Your password must have min 8 characters and max 128");
    }
  } while (numChar <8 || numChar > 128 || isNaN(numChar)); //Condition if is less than 8, more than 128 or the user enters a NaN the loop will repeat itself.
  return(numChar);
}
// This next function gets the character types the user wants for their password.
function gettingTypesOfChar (){
  var chars= {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    specialChar: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };
  var resp= {
    upperCase: "",
    lowerCase: "",
    numbers: "",
    specialChar: "",
  };
  var counter=0,possibbleChar;
  var objKeys= Object.keys(chars);

  do{
    for(i=0; i<4; i++){
      resp[objKeys[i]]= confirm("Would you like to include "+ objKeys[i] +" elements?");
      if(resp[objKeys[i]] === true){
        possibbleChar += chars[objKeys[i]];
        counter++;
      }
    }
    if(counter<1){
      alert("You need to pick at least one type of characters");
    }
  } while (counter<1);
  if (resp.upperCase && resp.lowerCase && resp.numbers && resp.specialChar){
    exp=RegExp(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[A-Za-z0-9!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if (resp.upperCase && resp.lowerCase && resp.numbers){
      exp=RegExp(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]/);
  } else if (resp.upperCase && resp.numbers && resp.specialChar){
      exp=RegExp(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[A-Z0-9!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if (resp.upperCase && resp.lowerCase && resp.specialChar){
      exp=RegExp(/(?=.*[A-Z])(?=.*[a-z])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[A-Za-z!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if (resp.upperCase && resp.lowerCase){
      exp=RegExp(/(?=.*[A-Z])(?=.*[a-z])[A-Za-z]/);
  } else if (resp.upperCase && resp.numbers){
      exp=RegExp(/(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]/);
  } else if (resp.upperCase && resp.specialChar){
      exp=RegExp(/(?=.*[A-Z])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[A-Z!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if (resp.upperCase){
      exp=RegExp(/[A-Z]/);
  } else if (resp.lowerCase && resp.numbers && resp.specialChar){
      exp=RegExp(/(?=.*[a-z])(?=.*[0-9])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-z0-9!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if (resp.lowerCase && resp.numbers){
      exp=RegExp(/(?=.*[a-z])(?=.*[0-9])[a-z0-9]/);
  } else if (resp.lowerCase && resp.specialChar){
      exp=RegExp(/(?=.*[a-z])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[Za-z!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if(resp.lowerCase){
      exp=RegExp(/[a-z]/);
  } else if (resp.numbers && resp.specialChar){
      exp=RegExp(/(?=.*[0-9])(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[0-9!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  } else if (resp.numbers){
      exp=RegExp(/[0-9]/);
  } else {
      exp=RegExp(/(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  }
  return(possibbleChar);
}

function generatePassword(){
  gettingNumOfChar();
  var charStrng= gettingTypesOfChar();
  charStrng= charStrng.substring(9);
  for (i=0; i<gettingNumOfChar(); i++)
    Math.floor(Math.random()*(gettingNumOfChar()));
  console.log(gettingNumOfChar());

  console.log(charStrng);
  console.log(exp);
}

  // // Increase a counter
  // function increase (x,y,arr){
  //   if(x == true){
  //     y++;
  //   }
  //   console.log(y);
  //   return (y);
  // }
  //   console.log(objKeys);
  

//   do{
//     numTypes = 0;
//     let lowerCase= confirm("Would you like to include lowercase elements?");
//     numTypes = increase (lowerCase,numTypes);
//     let upperCase = confirm("Would you like to include uppercase elements?");
//     numTypes = increase (upperCase,numTypes);
//     let numbers = confirm("Would you like to include numbers?");
//     numTypes = increase (numbers,numTypes);
//     let specialChar = confirm("Would you like to include special characters?");
//     numTypes = increase (specialChar,numTypes);
//     if (numTypes == 0){
//       alert("Your password must include at least one type of characters");
//     }

//   } while (numTypes <1);
// }