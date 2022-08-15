// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.
//
// 	If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
//
// 	An example should clarify:
//
// 	'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x) {
	console.log(x, 'xx')
	if (!x.length) {
		return '  '
	}
	let res = []
	let arr = x.split(' ')
	arr.forEach(el => {
		if (el.length < 4) {
			res += el
			res += ' '
		} else {
			if (el.length % 2 === 0) {
				let startText = el.slice(0, (el.length / 2)).split('').reverse().join('')
				let endText = el.slice(el.length / 2).split('').reverse().join('')
				res += startText + endText + ' '
			} else {
				let startText = el.slice(0, Math.floor(el.length / 2)).split('').reverse().join('')
				let endText = el.slice(Math.ceil(el.length / 2)).split('').reverse().join('')
				res += startText + el[Math.floor(el.length / 2)] + endText + ' '
			}
		}
	})
	return res.trim()
}