const reverseString = function(string) {
    // Count down from end of string to new string.
    reversedString = '';
    for (let i = (string.length - 1); i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
