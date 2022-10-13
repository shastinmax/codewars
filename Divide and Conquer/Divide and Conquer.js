// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.
//
// 	Return as a number.
//

function divCon(x) {
	let sumNum = x.filter(el => typeof el === 'number').reduce((a, b) => a + b, 0)
	let sumStr = x.filter(el => typeof el === 'string').map(el => +el).reduce((a, b) => a + b, 0)
	return sumNum - sumStr
}