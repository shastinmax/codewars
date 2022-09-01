// Find the sum of the digits of all the numbers from 1 to N (both ends included).
//
// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10
//
// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
//
// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		if ((i + '').length === 1) {
			sum += i
		} else {
			sum += (i + '').split('').reduce((acc, el) => acc + +el, 0)
		}
	}
	return sum;
}

function computeDepth(x) {
	let res = [], count = 0, num, i = 1

	do {
		num = x * i
		String(num).split('').forEach(el => {
			if (!res.includes(el)) {
				res.push(el)

			}
		})
		i++
		count++
		num = 0
	} while (res.length < 10)
	return count
}