const findTheOldest = function (people) {
    let oldAge = 0;
    let index;
    for (const person of people) {
        if (person["yearOfDeath"] && person["yearOfBirth"]) {
            const age = person["yearOfDeath"] - person["yearOfBirth"];
            if (age > oldAge) {
                oldAge = age;
                index = people.indexOf(person);
            }
        } else if (person["yearOfBirth"]) {
            const age = 2024 - person["yearOfBirth"];
            if (age > oldAge) {
                oldAge = age;
                index = people.indexOf(person);
            }
        }
    }
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
