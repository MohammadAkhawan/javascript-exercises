const removeFromArray = function (array, ...extraInput) {
    let finalArr = array;
    for (input of extraInput) {
        finalArr = finalArr.filter((item) => item !== input);
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
