const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce(add, 0);

const multiply = (arr) => arr.reduce((a, b) => a * b, 1);

const power = (num, pow) => (pow > 1 ? num * power(num, pow - 1) : num);

const factorial = (num) => (num > 0 ? num * factorial(num - 1) : 1);

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
