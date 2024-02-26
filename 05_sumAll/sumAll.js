const sumAll = function (num1, num2) {
    if (
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        num1 < 0 ||
        num2 < 0
    ) {
        return "ERROR";
    }

    if (num1 === num2) {
        return num1;
    }

    let smallNumber;
    let largeNumber;
    let finalNumber = 0;

    if (num1 > num2) {
        largeNumber = num1;
        smallNumber = num2;
    } else {
        largeNumber = num2;
        smallNumber = num1;
    }

    while (smallNumber <= largeNumber) {
        finalNumber += smallNumber;
        smallNumber++;
    }

    return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;
