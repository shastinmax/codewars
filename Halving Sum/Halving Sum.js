// Given a positive integer n, calculate the following sum:
//
//     n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
//
//     Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
    let counter = 0
    let num = 1
    let res = n
    while (res > 0) {
        counter += Math.floor(n / num)
        num = num * 2
        res = Math.floor(res / 2)
        console.log(counter)
    }
    return counter
}