// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z
//
// The Cat In The Hat is 2,000,000 cat units tall.
//
// 	Each cat is 2.5 times bigger than the cat underneath their hat.
//
// 	Find the total height of the cats if they are standing on top of one another.
//
// 	Counting starts from the Cat In The Hat
//
// n = the number of cats
//
// fix to 3 decimal places.

function height(n) {
	let sum = 0
	let num = 2000000
	for (let i = 0; i <= n; i++) {
		sum += num
		num = num / 2.5
	}
	return sum.toFixed(3) + ''
}