// Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
// 	Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
// 	"ODEWARSC",
// 	"DEWARSCO",
// 	"EWARSCOD",
// 	"WARSCODE",
// 	"ARSCODEW"
// 	"RSCODEWA",
// 	"SCODEWAR" ]
function scrollingText(text){
	let res = [text.toUpperCase()];

	text = text.toUpperCase();

	for (let i = 0; i < text.length - 1; i++) {
		text = text.slice(1) + '' + text[0];
		res.push(text)
	}

	return res
}