const convertToCelsius = function (tempInF) {
    const tempInCelsius = ((tempInF - 32) * 5) / 9;
    const roundedTempInC = Math.round(tempInCelsius * 10) / 10;
    return roundedTempInC;
};

const convertToFahrenheit = function (tempInC) {
    const tempInFahrenheit = (tempInC * 9) / 5 + 32;
    const roundedTempInF = Math.round(tempInFahrenheit * 10) / 10;
    return roundedTempInF;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
