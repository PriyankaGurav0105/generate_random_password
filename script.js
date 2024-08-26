const passwordBox = document.getElementById("password");

const length = 10;
const numbers = "0123456789";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = "!@#$%^&*()_+";

const allChars = numbers + upperCaseLetters + lowerCaseLetters + specialChars;

function createPassword(){
    let password = "";
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}