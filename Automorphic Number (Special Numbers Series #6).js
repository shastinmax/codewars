// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
function automorphic(n){
	let res  = n * n + ''
	return res.slice(-((n + '').length)) === n + '' ? "Automorphic" : "Not!!"
}