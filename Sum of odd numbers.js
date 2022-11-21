// Given the triangle of consecutive odd numbers:
//
// 	1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n) {
	if(n === 1)return 1
	if(n === 2)return 8
	if(n === 3)return 27
	let sum = 0
	let res = 0
	let number = (n-1) * n + 1
	for(let i = 1; i <= n; i++){
		sum +=number
		number += 2
	}
	return sum
}