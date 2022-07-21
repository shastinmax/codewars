// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
//
// 	In honor of my grandfather's memory we will write a function using his formula!
//
// Take a list of ages when each of your great-grandparent died.
// 	Multiply each number by itself.
// 	Add them all together.
// 	Take the square root of the result.
// 	Divide by two.
// 	Example
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

	return Math.floor(Math.sqrt([...arguments].map(el=>el*el).reduce((acc,ell)=>acc+ell,0))/2)
}