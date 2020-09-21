// Assignment Code
var generateBtn = document.querySelector("#generate");

var charSet = {
    lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numbers: [0,1,2,3,4,5,6,7,8,9],
    special: ['!','"','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','?','@','^','_','`','|','~']
};

// Write password to the #password input
function writePassword() {

    // Prompt asks user password length
    var charLength = prompt ("How many characters would you like your password to be?")

    var password = generatePassword(charLength);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}


function generatePassword(charLength) {
            
    // If password length is less than 8 return to home
    if (charLength < 8) {
    return alert("Password length must be more than 8 characters");}
        
    // If password length is 8 or greater, ask if user would like to use upperCase, useNumbers, or useSpecial.
    else if (charLength >= 8) {
    var useUpperCase = confirm ("Do you want to use upper case letters?");
    var useNumbers = confirm ("Do you want to use numbers?");
    var useSpecial = confirm ("Do you want to use special characters?");
    }
    
    var charUse = "";

    // If - Else if and Else statements regarding selection of password characteristics 
    if (useUpperCase === false && useNumbers === false && useSpecial === false){
        console.log(charLength);
        for (var i = 0; i < charLength; i++){
            var num = Math.floor(Math.random() * charSet.lowerCase.length);
        charUse = charUse + charSet.lowerCase[num];
        console.log('charUse', charUse);
        }
    return charUse;
    } else if (useUpperCase === true && useNumbers === false  && useSpecial === false) {
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random());
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else{
                var num2 = Math.floor(Math.random() * charSet.upperCase.length);
                charUse = charUse + charSet.upperCase[num2];

            }
            
        }
    return charUse;
    } else if (useUpperCase === true && useNumbers === true && useSpecial === false) {
        return console.log("lower case, upper case and numbers only"); //charSet.lowerCase[i].upperCase[i].numbers[i]
    } else if (useUpperCase === true && useNumbers === false && useSpecial === true) {
        return console.log("lower case, upper case and special only"); //charSet.lowerCase[i].upperCase[i].special[i]
    } else if (useUpperCase === false && useNumbers === true && useSpecial === false){
        return console.log("lower case and numbers only"); //charSet.lowerCase[i].numbers[i]
    } else if (useUpperCase === false && useNumbers === true && useSpecial === true){
        return console.log("lower case, numbers and special only"); //charSet.lowerCase[i].numbers[i].special[i]
    } else if (useUpperCase === false && useNumbers === false && useSpecial === true){
        return console.log("lower case and special only"); //charSet.lowerCase[i].special[i]
    } else {
        return console.log("all charSet"); //charSet[i]
    }

    

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
