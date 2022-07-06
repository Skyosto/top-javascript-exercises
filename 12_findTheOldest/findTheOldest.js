const findTheOldest = function(persons) {
    // If we're going to reduce, effectively what we'll have to do is replace the object passed along with the one that is older (if it is).
    // Can't really use any other Array methods because they don't have comparison abilities
    return persons.reduce((prevPerson, person) => {
        let firstEndYear = prevPerson.yearOfDeath;
        let secondEndYear = person.yearOfDeath;
        if(!prevPerson.yearOfDeath) {
            today = new Date();
            firstEndYear = today.getFullYear();
        }
        if (!person.yearOfDeath) {
            today = new Date();
            secondEndYear = today.getFullYear();
        }

        let firstAge = firstEndYear - prevPerson.yearOfBirth;
        let secondAge = secondEndYear - person.yearOfBirth;
        
        return (secondAge > firstAge) ? person : prevPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
