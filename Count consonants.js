// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
//
// 	Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
function consonantCount(str) {
	let arr_en = ['b', 'c', 'd', 'f', 'g', 'h','j', 'k', 'l', 'm', 'n','p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
	let res = 0
	for(let i = 0; i < str.length; i++){
		arr_en.includes(str[i].toLowerCase()) ? res++ : res +=0
	}
	return res
}