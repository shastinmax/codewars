// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
//
// 	Task
// 	Your task is to return a number from a string.
//
// 	Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
//

// const filterString = (value) => {
// 	return +value.replace(/[a-zA-Z]/g, '')
// }

let obj = {}
let count = 1

function coun (str) {
	obj[str] = count++
}

coun('as')
coun('as0')
coun('as1')

console.log(obj,'++')
console.log(count,'--++')

