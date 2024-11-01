const reverseString = (string) => {
	let resString = "";
	for (let i = string.length; i > 0; i--) {
		resString += string.at(i - 1);
	}
	return resString;
};

// Do not edit below this line
module.exports = reverseString;
