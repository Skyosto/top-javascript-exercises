const palindromes = function (string) {
// Get a string of only letters
let characters = string.match(/[a-zA-Z]/g).join("").toLowerCase();
// Split to 2 strings in half (rounding up)
let half1 = characters.substring(0, Math.round(characters.length / 2));
let half2 = characters.substring(Math.floor(characters.length / 2), characters.length).split("").reverse().join("");
// If strings ==, palindrome
return half1 == half2 ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
