const repeatString = function(inputString, repeats) {
    let res = '';
    for (let i = 0; i < repeats; i++) {
        res += inputString;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
