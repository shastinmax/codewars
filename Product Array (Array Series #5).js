// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers) {
	let res = []
	let multi = 1
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length; j++) {
			if (i === j) {
				continue
			}
				multi *= numbers[j]
		}
		res.push(multi)
		multi = 1
	}
	return res
}