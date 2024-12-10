const palindromes = (str) => {
	const filteredStr = str
		.toLowerCase()
		.split("")
		.filter((ch) => ch.match(/^[0-9a-z]+$/))
		.join("");

	return filteredStr === filteredStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
