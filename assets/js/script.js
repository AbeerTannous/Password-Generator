// Assignment code here


 //getting the length of the password from the user
 function getPasswordLength(){
  var passwordLength = window.prompt("Choose the length of your password the lenth sould be at least 8 and no more than 128");
  
  if (passwordLength<8){
     window.alert("password length must be at least 8 charecters");
    getPasswordLength();
     }
  else if (passwordLength>128){
     window.alert("password length should not be more than 128 charecter");    
  }
   return passwordLength;
  }
  var length = getPasswordLength();

// getting random lower case
function includeLowerCase(){
  var lowerCase = prompt("woudl you like to includ lower case enter y for yes and n for no");
   if (lowerCase ==="y"){
      return true;
  }
   else if (lowerCase ==="n") {
     return false;
    } 
   else if (lowerCase === "" || lowerCase === null) {
       window.alert("You need to provide a valid answer!.");
   }
  }
  
// getting random upper case
function includUpperCase(){
  var upperCase = prompt("woudl you like to includ Upper case enter y for yes and n for no");
    if (upperCase ==="y"){
      return true;
   }
    else if (upperCase ==="n") {
      return false;
    } 
    else if (upperCase === "" || upperCase === null) {
       window.alert("You need to provide a valid answer!.");
    }
}
// getting random numbers 
function includNumbers(){
 var  numbers = prompt("woudl you like to includ numbers enter y for yes and n for no");
    if (numbers ==="y"){
      return true;
   }
     else if (numbers ==="n") {
       return false;
    } 
     else if (numbers === "" || numbers === null) {
       window.alert("You need to provide a valid answer!.");
    }
}
// getting random  special charector
function includSpecialCharector(){
  var  specialCarecters = prompt("woudl you like to includ special carecters enter y for yes and n for no");
    if (specialCarecters ==="y"){
        return true;
    }
     else if (specialCarecters ==="n") {
       return false;
    } 
     else if (specialCarecters === "" || specialCarecters === null) {
       window.alert("You need to provide a valid answer!.");
    }
}

function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomNumbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSpecial(){
  var sympol ="!@#$%^&*()[]{}=<>/,.";
  return sympol[Math.floor(Math.random() * sympol.length)];
}

const paswordCriteria = {
  lower: randomLower,
  upper: randomUpper,
  special: randomSpecial,
  number: randomNumbers,
}

//var length = getPasswordLength();
var lower = includeLowerCase();
var upper = includUpperCase();
var special = includSpecialCharector();
var number = includNumbers();

console.log(lower+upper+special+number);



function generatePassword(length,lower,upper,special,number){

var typeCount = lower+upper+special+number ;

const typeArray = [{lower},{upper},{special},{number}].filter(item=>Object.values(item)[0]);
 console.log(typeArray);
 password = "";

for (let i=0; i< length; i+=typeCount){
  typeArray.forEach(type => { 

    const funcName =Object.keys(type)[0]; 
    
    password +=  paswordCriteria[funcName]();

  });
}
  var finalPassword = password.slice(0,length);
  return finalPassword;

}

console.log(generatePassword(length,lower,upper,special,number)); 

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword(length,lower,upper,special,number);
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

