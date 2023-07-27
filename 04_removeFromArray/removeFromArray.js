const removeFromArray = function (arr) {
    let res = [];
    let args = [];

    for (let i = 1; i < arguments.length; i++) args.push(arguments[i]);

    arr.forEach(element => {
        if (!(args.includes(element))) {
            res.push(element);
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
