const removeFromArray = function(array, ...values) {
    // For each value...
    let filteredArray = [];
    for (let value of values) {
        // Find the value(s) in array
        for (let i = 0; i < array.length; i++) {
            // Use splice() to remove it
            if (value === array[i]) array = array.splice(i, 1);
        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
