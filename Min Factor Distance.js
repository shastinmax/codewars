// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.
//
// 	Example:
//
// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]
//
// Hence the asnwer will be 2 (=13-11)

function minDistance(n) {
	let arr = []
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			arr.push(i)
		}
	}
	let res = 10000000000
	arr = arr.reverse()
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[i] - arr[j] < res && arr[i] - arr[j] !== 0) {
				res = arr[i] - arr[j]
			}
		}
	}
	return res
}