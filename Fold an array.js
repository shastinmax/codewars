// In this kata you have to write a method that folds a given array of integers by the middle x-times.
//
// 	An example says more than thousand words:
//
// 	Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]
//
// A little visualization (NOT for the algorithm but for the idea of folding):
//
// Step 1         Step 2        Step 3       Step 4       Step5
// 5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*
//
//
// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

function foldArray(array, runs) {
	let res = []
	for (let j = 0; j < runs; j++) {
		let num = array.length % 2 !== 0 ? array[Math.floor(array.length / 2)] : null
		for (let i = 0; i < Math.floor(array.length / 2); i++) {
			res.push(array[i] + array[array.length - 1 - i])
		}
		if (num === null) {
			array = res
			res = []
		} else {
			res.push(num)
			array = res
			res = []
		}
	}
	return array
}