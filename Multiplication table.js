// Your task, is to create NxN multiplication table, of size provided in parameter.
//
// 	for example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
	let count = 0
	let arr = []
	let res = []
	for (let i = 1; i < size + 1; i++) {
		for (let j = 1; j < size + 1; j++) {
			count += i
			arr.push(count)
		}
		count = 0
		res.push(arr)
		arr = []
	}
	return res
}