// Complete the solution so that it returns the number of times the search_text is found within the full_text.
//
// 	Usage example:
//
// 	solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1
function solution(fullText, searchText){
	let count = 0
	let str = fullText.replace(new RegExp( searchText, "g" ), "*")
	for(let i = 0;i<str.length;i++){
		if(str[i]==='*'){
			count +=1
		}
	}
	return count
}