// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
function reverse(str){
	let arr = str.split(' ')
	let res = arr.map((str,i)=> {
		if(!(i % 2)){
			return str
		}else{
			return str.split('').reverse().join('')
		}
	})
	return res.join(' ').trim()
}