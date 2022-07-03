// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
// 	For example:
//
// 	dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//
// 	dup(["kelless","keenness"]) = ["keles","kenes"].
//
// 		Strings will be lowercase only, no spaces. See test cases for more examples.
//
// 	Good luck!
function dup(s) {
	let arr = []
	let str = ''
	s.forEach((el, i, array) => {
		for (let i = 0; i < el.length; i++) {
			if (el[i + 1] !== el[i]) {
				str += el[i]
			}
		}
		arr.push(str)
		str = ''
	})
	return arr
};