const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sumAll = 0;
	for (let i = 0; i < array.length; i++) {
    sumAll += array[i];
  }
  return sumAll;
};

const multiply = function(array) {
  let multiplied = 1;
	for (let i = 0; i < array.length; i++) {
    multiplied *= array[i]
  }
  return multiplied;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if (num < 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
