function evenFibonacciNumbers() {
	var sum = 0;
	var n_2 = 0;
	var n_1 = 0;
	var n = 1;
	while (n <= 4000000) {
		if (n % 2 === 0) {
			sum += n;
		}
		n_2 = n_1;
		n_1 = n;
		n = n_2 + n_1;
	}
	console.log(sum);
}

evenFibonacciNumbers();