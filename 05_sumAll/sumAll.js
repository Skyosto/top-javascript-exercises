const sumAll = function(int1, int2) {
    // Check if both parameters are numbers
    if(typeof(int1) !== 'number'
     || typeof(int2) !== 'number') {
        return 'ERROR';
    }
    // Reverse order if the first number is bigger
    if (int1 > int2) {
        [int1, int2] = [int2, int1];
    }
    // If first number is < 0
    if(int1 < 0) {
        return 'ERROR'
    }
    // Logic to count intergers between (likely for loop).
    let sum = 0;
    for (i = int1; i < int2 + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
