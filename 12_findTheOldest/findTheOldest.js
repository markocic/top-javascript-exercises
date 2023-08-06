const findTheOldest = function(people) {

    let oldest;
    let max = -1;
    people.forEach(person => {
        let lower = person.yearOfBirth;
        let upper = (person.yearOfDeath == undefined) ? 2023 : person.yearOfDeath;
        
        let years = upper - lower;
        if (years > max) {
            oldest = person;
            max = years;
        }
        
    });

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
