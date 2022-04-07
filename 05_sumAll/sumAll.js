const sumAll = function(num1, num2) {
    let sum = 0;
    let low = 0;
    let high = 0;
    
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 > num2) {
            low = num2;
            high = num1;
        } else {
            low = num1;
            high = num2;
        };
        
        for (let i = low; i <= high; i++) {
            sum += i;
        };
        return sum;
    } else {
        return "ERROR";
    };
};

// Do not edit below this line
module.exports = sumAll;
