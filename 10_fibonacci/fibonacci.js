const fibonacci = function(count) {
    // Looks like we need to build the fibonacci while keeping the index.
    // Also this fibonacci is going to be offset by 1 (doesn't start at 0, so to speak)
    if (count < 0) return 'OOPS';
    if (typeof count === 'string') count = parseInt(count);
    // Build fibonacci (as array) to count
    let fibonacci = [1, 1]
    for (let i = 1; i < count + 1; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    }
    // Grab number at index of count
    return fibonacci[count - 1];
};

// Do not edit below this line
module.exports = fibonacci;
