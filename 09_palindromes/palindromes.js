const palindromes = function (string) {
    const checkString = string.toLowerCase().replace(/[^a-z0-9]/g,"").split("").reverse().join("");
    return string.toLowerCase().replace(/[^a-z0-9]/g,"") === checkString;
};

// Do not edit below this line
module.exports = palindromes;
