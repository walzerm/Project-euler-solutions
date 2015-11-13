function primeFactors(number) {
	var primeNumberArr = primeNumbers(number);
	var queryNumber = number;
	var primeFactorsArr = [];

	while (queryNumber > 1) {
		var numberIsFactor = true;
		var indexOfArr = 0;
		while (numberIsFactor) {
			if (queryNumber % primeNumberArr[indexOfArr] === 0) {
				numberIsFactor = false;
				primeFactorsArr.push(primeNumberArr[indexOfArr]);
				queryNumber = queryNumber / primeNumberArr[indexOfArr];
			}
			indexOfArr++;
		}
	}
	console.log(primeFactorsArr);
	return Math.max.apply(null, primeFactorsArr);
}

function primeNumbers(number) {
	var numberRange = Math.sqrt(number);
	var primeNumberArr = [2];
	for (var i = 3; i <= numberRange; i++) {
		var prime = true;
		for (var j = 2; j < i; j++) {
			if (i % j === 0) {
				prime = false;
				break;
			}
		}
		if (prime) {
			primeNumberArr.push(i);
		}
	}
	return primeNumberArr;
}
console.log(primeFactors(600851475143));