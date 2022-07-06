const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numberArray) {
	let sum = 0;
  if (numberArray.length <= 0) return sum;
  for (number of numberArray) {
    sum += number;
  }
  return sum;
};

const multiply = function(numberArray) {
  let product = numberArray[0];
  if (numberArray.length <= 0) return product;
  for (let i = 1; i < numberArray.length; i++) {
    product *= numberArray[i];
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
	let product = num;
  num -= 1;
  // Take the number, and multiply by itself - 1
  do {
    product = multiply([product, num]);
    num--;
  } while ( num > 1)
  return product;
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
