const fibonacci = function (num) {
    if (Number(num) === 0) return 0;
    if (Number(num) === 1) return 1;
    if (Number(num) < 0) return "OOPS";
    let counter = Number(num);
    let num1 = 0;
    let num2 = 1;
    let temp;
    while (counter > 1) {
        temp = num2;
        num2 += num1;
        num1 = temp;
        counter--;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
