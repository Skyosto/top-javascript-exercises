const removeFromArray = function (array, ...values) {
    // For each value... 
    for (let value of values) {
        // Find the value(s) in array
        for (let i = 0; i < array.length; i++) {
            // Use splice() to remove it
            if (array[i] === value) { 
                array.splice(i, 1); 
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
