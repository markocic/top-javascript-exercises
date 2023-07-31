const removeFromArray = function(array, ...params) {
    let result = array.filter(function (letter) {
        return !params.includes(letter);
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
