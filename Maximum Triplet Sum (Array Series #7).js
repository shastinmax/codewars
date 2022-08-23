// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:
// 	As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
//
// 	Note : duplications are not included when summing , (i.e) the numbers added only once .
//

function maxTriSum(numbers){
	return [...new Set(numbers)].sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>a+b)
}