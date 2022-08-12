// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:
//
// 'Hello World'
//
// would give:
//
//
// 	Words in your solution should be left-aligned.

function mirror(text) {
	let arr = text.split(' ').map(el => el.split('').reverse().join(''))
	let length = 0
	let res = ''
	let space = ' '
	let star = '*'
	arr.forEach((el) => {
		if (el.length > length) {
			length = el.length
		}
	})
	res += star.repeat(length + 4) + '\n'
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length === length) {
			res += `${star} ${arr[i]} ${star}\n`
		} else {
			res += '*' + ' ' + arr[i] + space.repeat(length - arr[i].length) + ' ' + '*' + '\n'
		}
	}
	res += star.repeat(length + 4)
	return res
}