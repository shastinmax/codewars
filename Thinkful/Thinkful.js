// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.
//
//     For example:
//
//     ['simple', 'is', 'better', 'than', 'complex'] ==> 7
function longest(words) {
    return words.sort((a,b)=>b.length - a.length)[0].length
}
function fib(n) {
	if(n ===0 || typeof n !== 'number'){
		return ''
	}
	if(n ===1){
		return '0'
	}
	let arr = [0,1]
	for (let i= 1; i<n-1;i++){
		arr.push(arr[i]+arr[i-1])
	}

	console.log(arr.join(' '))
}
fib(3)