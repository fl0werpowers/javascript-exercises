const removeFromArray = (arr, ...rmArgs) => {
	let resultArr = arr;
	for (const arg of rmArgs) {
		resultArr = resultArr.filter((arrElement) => arrElement !== arg);
	}

	return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
