// When provided with a String, capitalize all vowels
//
// For example:
//
//     Input : "Hello World!"
//
// Output : "HEllO WOrld!"
//
// Note: Y is not a vowel in this kata.
function swap(string) {
    let res = string.split('').map(el => el === 'a' || el === 'e' || el === 'o' || el === 'i' || el === 'u' ? el.toUpperCase() : el)
    return res.join('');
}