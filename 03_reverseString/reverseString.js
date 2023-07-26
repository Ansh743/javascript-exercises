const reverseString = function(inputString) {
    let res = '';
    for (let i = inputString.length-1; i >= 0; i--) {
        const element = inputString[i];
        res += element;
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
