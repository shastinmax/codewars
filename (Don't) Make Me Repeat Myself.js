// There's a built-in function called repeat on strings. It repeats the given string N times.
//
// Example:
//
// 	'a'.repeat(3) === 'aaa'
// 'around the world '.repeat(2) === 'around the world around the world'
// It can be very useful for things like aligning text
//
// console.log('Root node')
// console.log(' '.repeat(4) + 'Sub-tree')
// console.log(' '.repeat(8) + 'Deeper sub-tree')
String.prototype.repeat = function(count) {
	let result = [];

	for(let i = 0; i < count; i++){
		result[i] = this
	}

	return result.join('')
};