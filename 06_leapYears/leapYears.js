const leapYears = function (number) {
    if (!Number.isInteger(number) || number < 0) {
        return "wrong Input";
    }
    if (number % 4 === 0) {
        if (number % 100 !== 0) {
            return true;
        } else {
            if (number % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
