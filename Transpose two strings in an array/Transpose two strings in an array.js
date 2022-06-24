// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
//
// e.g. transposeTwoStrings(['Hello','World']);
//
// should return
//
// H W
// e o
// l r
// l l
// o d
function transposeTwoStrings(array) {
	let lengthStr = array[0].length > array[1].length ? array[0].length : array[1].length;
	let result = [];

	for (let i = 0; i < lengthStr; i++) {
		let str = (array[0][i] || " ") + " " + (array[1][i] || " ");
		result.push(str);
	}

	return result.join("\n");
}