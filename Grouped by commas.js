// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.
//
// 	Assume: 0 <= n < 2147483647
//
// Examples
// 1  ->           "1"
// 10  ->          "10"
// 100  ->         "100"
// 1000  ->       "1,000"
// 10000  ->      "10,000"
// 100000  ->     "100,000"
// 1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

function groupByCommas(n) {
	if(String(n).length < 4 ){
		return n + ''
	}
	n = (n + '').split('').reverse()
	let arr = [1,0,1,0]
	let res = n.map((el,i,arr)=>(i+1) % 3 === 0 && i !== arr.length - 1 ? el = ',' +el: el
	)
	return res[res.length-1] === ',' ? res.slice(1).reverse().join('') : res.reverse().join('')
}