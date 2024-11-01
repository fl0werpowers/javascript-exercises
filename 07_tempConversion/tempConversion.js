const convertToCelsius = (F) => {
	const C = ((F - 32) * 5) / 9;

	if (!Number.isInteger(C)) return Number.parseFloat(C.toFixed(1));

	return C;
};

const convertToFahrenheit = (C) => {
	const F = C * (9 / 5) + 32;

	if (!Number.isInteger(F)) return Number.parseFloat(F.toFixed(1));

	return F;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
