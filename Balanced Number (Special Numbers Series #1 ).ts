// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.
//
//     If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)
//
// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
//
// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
//
//     Examples
// 7 ==> return "Balanced"
// Explanation:
//     middle digit(s): 7
// sum of all digits to the left of the middle digit(s) -> 0
// sum of all digits to the right of the middle digit(s) -> 0
// 0 and 0 are equal, so it's balanced.
function balancedNum(number){

    if(String(number).length <= 2 ){
        return "Balanced"
    }
    let arr = String(number).split('').map(el => +el),
        arr1,
        arr2
    if(String(number).length % 2 === 0) {
        arr1 = arr.slice(0,arr.length / 2 - 1)
        arr2= arr.slice(arr.length / 2 + 1)
    } else{
        arr1 = arr.slice(0,Math.floor(arr.length / 2 ))
        arr2= arr.slice(Math.floor(arr.length / 2 ) + 1)
    }
    return arr1.reduce((a,b)=>a+b) === arr2.reduce((a,b)=>a+b) ? "Balanced" : "Not Balanced"
}