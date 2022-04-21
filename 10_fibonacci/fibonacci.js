const fibonacci = function(num) {
    let formattedNum = Number(num);
    let array = [0, 1];
    if (formattedNum > 0) {
        for (let i = 2; i <= formattedNum; i++) {
            array[i] = array[i-1] + array[i - 2];
        }
        return array[formattedNum];
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
