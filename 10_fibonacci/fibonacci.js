const fibonacci = function(x) {
    x = parseInt(x, 10);
    let arr = [0, 1, 1], newNum;
    if (x < 0) return 'OOPS';
    if (x <= 2) return 1;
    for (let i = 2; i <= x; i++) {
        newNum = arr[1] + arr[2];
        arr.shift();
        arr.push(newNum);

        // console.log(`${i} ${arr}`);
    }

    return arr[1];

};

// Do not edit below this line
module.exports = fibonacci;
