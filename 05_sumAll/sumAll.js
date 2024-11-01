const sumAll = (num1, num2) => {
	if (!isPositiveInteger(num1) || !isPositiveInteger(num2)) {
		return "ERROR";
	}

	const args = num1 < num2 ? [num1, num2] : [num2, num1];

	let res = 0;

	for (let i = args[0]; i <= args[1]; i++) {
		res += i;
	}

	return res;
};

function isPositiveInteger(number) {
	return typeof number === "number" && number >= 0 && Number.isInteger(number);
}

// Do not edit below this line
module.exports = sumAll;
