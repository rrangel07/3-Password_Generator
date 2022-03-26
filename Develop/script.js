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
    numChar= prompt("Enter the number of characters for your password (8-128)");
    if (numChar <= 7 || numChar >= 129) {
      alert("Your password must have min 8 characters and max 128");
    }
    // The if condition allows the user to exit the script if they cliked by mistake
    if (!numChar){
      return;
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
  var counter=0, possibbleChar="";
  var objKeys= Object.keys(chars);

  //Two loops were nested. The inner loop lets the user select the type of data they want on their password. The outer loop forces the user to select at least one type of data.
  do{
    for(i=0; i<4; i++){
      resp[objKeys[i]]= confirm("Would you like to include "+ objKeys[i] +" elements?"); //This line lets the user pick the type of characters they want to include on their password. Also stores the response in an object
      if(resp[objKeys[i]] === true){
        possibbleChar += chars[objKeys[i]]; //Creates the string with the characters selected by the user.
        counter++;
      }
    }
    if(counter<1){ //This condition informs the the user that they haven't picked any type of character
      alert("You need to pick at least one type of characters");
    }
  } while (counter<1);//This condition verifies that the user picked at least one type of character and if they haven't picked at least one, it restarts the whole loop.

  // From lines 58 to 88 we set a regular expression, based on the previous selections of the user. This will be used to confirm that the password meets the conditions required by the user,
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
  return(possibbleChar); //returns the string with all the types of values selected by the user.
}

function generatePassword(){
  var numChar=gettingNumOfChar();
  // Following the logic inside the function gettingNumOfChar the if condition allows the user exit the script if numChar isNan
  if(isNaN(numChar)){
    return;
  }
  var charStrng= gettingTypesOfChar();
  // console.log(charStrng.length);
  //Two loops were nested here, too. The inner one limits the number of character for the password using the user's input. The outer one checks that the password meet the regular expression setted based on the user's input, if not the loop starts all over again until that happens.
  do{
    var possiblePassword="";   //this line of code restarts the variable possible password in case that the loop is repeating itself, we still will meet the criteria of password length.
    for (i=0; i<numChar; i++){
      let position=Math.floor(Math.random()*charStrng.length);
      possiblePassword += charStrng.charAt(position);
    }
}while (!exp.test(possiblePassword)); // This condition verifies that the possible password meets the conditions set by the regular expression i.e. that includes all the characters selected by the user.

  // console.log(numChar);
  // console.log(charStrng.length);
  // console.log(exp);
  return(possiblePassword); //returns the password once it meets all the criteria.
}
