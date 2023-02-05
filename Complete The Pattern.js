// Task:
// 	You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//
// 	Note:Returning the pattern is not the same as Printing the pattern.
// 	Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// 	There are no whitespaces in the pattern.
// 	Pattern:
function pattern(n){
	let output="";
	// Happy Coding ^_^
	for(let i = 1; i <= n;i++){
		i === 1 ? output +=i : output += '\n' +( i + '').repeat(i)
	}
	return output;
}