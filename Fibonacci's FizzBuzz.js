// Instructions
// The goal of this kata is two-fold:
//
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
//
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
//
// 	For the sake of this kata, you can assume all input will be a positive integer.
//
// 	Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.
//
// 	Examples
// Input:
//
// 	fibsFizzBuzz(5)

var fibsFizzBuzz = function(n) {
	if(n === 1){
		return [1]
	}
	let arr = [1,1]
	for(let i = 1; i < n-1; i++){
		arr.push(arr[i] + arr[i-1])
	}
	return arr.map(el => el % 5 === 0 && el % 3 === 0 ? 'FizzBuzz' : el % 3 === 0 ? 'Fizz': el % 5 === 0 ? 'Buzz' : el )
}