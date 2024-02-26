const repeatString = function (string, number) {
    if (string === "" || number === 0) {
        return "";
    }
    if (number < 0) {
        return "ERROR";
    }
    let finalString = "";
    for (let i = 1; i <= number; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
