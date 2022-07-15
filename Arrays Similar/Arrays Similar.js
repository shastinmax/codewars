// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
//
// 	const arr1 = [1, 2, 2, 3, 4],
// 	arr2 = [2, 1, 2, 4, 3],
// 	arr3 = [1, 2, 3, 4],
// 	arr4 = [1, 2, 3, "4"]

function arraysSimilar(arr1, arr2) {
	arr1=arr1.sort().map(el=>typeof el=== 'number'? el*2 :'').join('')
	arr2=arr2.sort().map(el=>typeof el=== 'number'? el*2 :'').join('')
	return arr1 === arr2 ? true : false
}