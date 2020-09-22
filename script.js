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
    var useLowerCase = confirm ("Do you want to use lower case letters?")
    var useUpperCase = confirm ("Do you want to use upper case letters?");
    var useNumbers = confirm ("Do you want to use numbers?");
    var useSpecial = confirm ("Do you want to use special characters?");
    }
    
    var charUse = "";


    // If - Else if and Else statements regarding selection of password characteristics 
    if (useUpperCase === false && useNumbers === false && useSpecial === false){
        for (var i = 0; i < charLength; i++){
            var num = Math.floor(Math.random() * charSet.lowerCase.length);
        charUse = charUse + charSet.lowerCase[num];
        }
    return charUse;
    } 
    
    else if (useUpperCase === true && useNumbers === false  && useSpecial === false) {
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
    } 
    
    else if (useUpperCase === true && useNumbers === true && useSpecial === false) {
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random()*2);
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else if (selectedArray === 1) {
                var num2 = Math.floor(Math.random() * charSet.upperCase.length);
                charUse = charUse + charSet.upperCase[num2];
            
            }   
            else {
                var num3 = Math.floor(Math.random() * charSet.numbers.length);
                charUse = charUse + charSet.numbers[num3];
            }          
            
        }
    return charUse;
    }
    
    else if (useUpperCase === true && useNumbers === false && useSpecial === true) {
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random()*2);
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else if (selectedArray === 1) {
                var num2 = Math.floor(Math.random() * charSet.upperCase.length);
                charUse = charUse + charSet.upperCase[num2];
            
            }   
            else {
                var num3 = Math.floor(Math.random() * charSet.special.length);
                charUse = charUse + charSet.special[num3];
            }          
            
        }
        return charUse;
    } 
    
    else if (useUpperCase === false && useNumbers === true && useSpecial === false){
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random());
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else{
                var num2 = Math.floor(Math.random() * charSet.numbers.length);
                charUse = charUse + charSet.numbers[num2];

            }
            
        }
        
        return charUse;
    }
    
    else if (useUpperCase === false && useNumbers === true && useSpecial === true){
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random()*2);
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else if (selectedArray === 1) {
                var num2 = Math.floor(Math.random() * charSet.numbers.length);
                charUse = charUse + charSet.numbers[num2];
            
            }   
            else {
                var num3 = Math.floor(Math.random() * charSet.special.length);
                charUse = charUse + charSet.special[num3];
            }          
            
        }
        return charUse;
    } 
    
    else if (useUpperCase === false && useNumbers === false && useSpecial === true){
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random());
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else{
                var num2 = Math.floor(Math.random() * charSet.special.length);
                charUse = charUse + charSet.special[num2];

            }
            
        }
        
        return charUse;
    } 
    
    else {
        for (var i = 0; i < charLength; i++){
            var selectedArray = Math.round(Math.random()*4);
            if(selectedArray===0){
                var num1 = Math.floor(Math.random() * charSet.lowerCase.length);
                charUse = charUse + charSet.lowerCase[num1];
            }
            else if (selectedArray === 1) {
                var num2 = Math.floor(Math.random() * charSet.upperCase.length);
                charUse = charUse + charSet.upperCase[num2];
            
            }   
            else if (selectedArray === 2) {
                var num3 = Math.floor(Math.random() * charSet.numbers.length);
                charUse = charUse + charSet.numbers[num3];
            }
            else {
                var num4 = Math.floor(Math.random() * charSet.special.length);
                charUse = charUse + charSet.special[num4];
            }
            
        }
        return charUse;
    }

    

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
