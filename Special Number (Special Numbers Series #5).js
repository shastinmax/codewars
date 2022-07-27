// Definition
// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
//
// Given a number determine if it special number or not .
//
// 	Warm-up (Highly recommended)
// Playing With Numbers Series
const specialNumber = n => {
	const specialNum = [ 0 , 1 , 2,  3,  4 , 5];
	n = n.toString().split('').sort((a , b) => b - a);

	return n[0] > specialNum.length - 1 ? 'NOT!!' : "Special!!";
}