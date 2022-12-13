// Move every letter in the provided string forward 10 letters through the alphabet.
//
// 	If it goes past 'z', start again at 'a'.
//
// 	Input will be a string with length > 0.

function moveTen(s){
	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const res = s.split('')
	let result = ''
	res.forEach(el=>{
		arr_en.indexOf(el) + 10 > 25 ?result += arr_en[arr_en.indexOf(el) - 16] : result += arr_en[arr_en.indexOf(el) +10]
	})
	return result
}