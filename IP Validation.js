// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
//
// 	Valid inputs examples:
// 	Examples of valid inputs:
// 	1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 	1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// 	Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
	let res = true
	let arr = str.split('.')
	let arr1 = []
	if(arr.length > 4 || arr.length < 4)return false
	arr.forEach(el=>arr1.push(+el))
	arr1.forEach((el,i)=>{
		if(el === NaN || el > 255 || el +'' !== arr[i] || el < 0 ){
			res = false
		}
	})
	return res;
}