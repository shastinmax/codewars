// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).
//
// Fortunately, I discovered that the virus hides my censored letters inside root directory.
//
// 	It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.
//
// 	Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"
//
// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"
//
// uncensor("xyz", "") ➜ "xyz"
function uncensor(infected, discovered) {
	for (let i = 0; i < discovered.length; i++) {
		infected = infected.replace(/\*/, discovered[i])
	}

	return infected
}
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	console.log(arr.join(' '))
}
showFamily(family)

const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const str = 'CNY'

function availableCurr(arr, missingCurr) {
	let newArr = arr.filter(el=>el!==missingCurr)
	let strrr = ''
	newArr.forEach(el=> strrr += el + '\n')
	console.log(strrr)
	return ''
}
availableCurr(additionalCurrencies,str)
