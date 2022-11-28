// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
function automorphic(n){
	let res  = n * n + ''
	return res.slice(-((n + '').length)) === n + '' ? "Automorphic" : "Not!!"
}

function fibonacci(max) {
	let arr = [0,1]
	for(let i = 1; i < max; i++){
		arr.push(arr[i] + arr[i-1])
	}
	console.log(arr)
}
fibonacci(5)