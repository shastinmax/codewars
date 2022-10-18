// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
	let maxSqrt = 0
	let countMax = 0
	let minSqrt = 0
	let countMin = 0
	for(let i = n; i >=0 ; i--){
		countMin ++
		if(Number.isInteger(Math.sqrt(i ))){
			minSqrt = i
			break
		}
	}
	for(let i = n; i < 1000000000 ; i++){
		countMax++
		if(Number.isInteger(Math.sqrt(i ))){
			maxSqrt = i
			break
		}
	}
	return countMax > countMin ? minSqrt : maxSqrt
}
