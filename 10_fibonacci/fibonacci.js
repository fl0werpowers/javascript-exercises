const fibonacci = (index) => {
	if (index < 0) return "OOPS";
	// biome-ignore lint/suspicious/noDoubleEquals: This function accepts strings as well
	if (index == 0) return 0;
	let fibo1 = 1;
	let fibo2 = 1;
	for (let i = index; i > 2; i--) {
		const fibo3 = fibo1 + fibo2;
		fibo1 = fibo2;
		fibo2 = fibo3;
	}
	return fibo2;
};

// Do not edit below this line
module.exports = fibonacci;
