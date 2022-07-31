// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
//
// 	We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
//
// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26
//
// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20
function solve(s) {
	let str = "aeiou"
	let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let res = 0
	let count = 0
	for (let i = 0; i < s.length; i++) {
		if (!str.includes(s[i])) {
			count += arr_en.indexOf(s[i]) + 1
			if (res < count) {
				res = count
			}
		} else {
			count = 0
		}
	}
	return res;
};