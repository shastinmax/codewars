// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position
//
// 	[Frog, int, int, int, ..., int]
//
// The integer itself may tell you the length and the direction of the jump
//
// For instance:
// 	2 = jump two indices to the right
// -3 = jump three indices to the left
// 0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.
//
// 	Return -1 if Frog can't jump out of the array
//
// Example:
// 	array = [1, 2, 1, 5];
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

function solution(a) {
	let count = 0
	let res = -1
	for (let i = 0; i < a.length; i++) {
		if (a[i + a[i]] === undefined) {
			res = undefined
			count += 1
			return count
		} else {
			i = i + a[i] - 1
			count += 1
			if (count > 10) {
				return -1
			}
		}
	}
	return res ? count : -1
}