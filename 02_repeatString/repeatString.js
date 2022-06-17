const repeatString = function(string, count) {
    if (count < 0) return 'ERROR';

    let stringResult = '';
    for (let counter = 0; counter < count; counter++) {
        stringResult += string
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
