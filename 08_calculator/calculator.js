const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((sum, currentNumber) => sum + currentNumber, 0);
};

const multiply = function (arr) {
    return arr.reduce((total, currentNumber) => total * currentNumber);
};

const power = function (a, b) {
    const initialA = a;
    if (b === 0) return 1;
    else if (b === 1) return a;
    while (b > 1) {
        a *= initialA;
        b--;
    }
    return a;
};

const factorial = function (num) {
    if (num === 0) return 1;
    let fact = 1;
    while (num > 1) {
        fact *= num;
        num--;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
