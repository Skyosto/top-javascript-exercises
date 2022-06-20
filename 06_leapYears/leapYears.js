const leapYears = function(int) {
    if (int % 4 === 0 ) {
        if(int % 400 === 0 && int % 100 === 0) {
            return true;
        }
        if (int % 400 !== 0 && int % 100 === 0) {
            return false;
        } 
        else return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
