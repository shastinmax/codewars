// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.
//
//     eg.
//
//     Array [11,4,9,2,8] is odd-heavy
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]
//
// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

function isOddHeavy(n) {
    if (n.length === 1) {
        let result
        n[0] % 2 ? result = true : result = false
        return result
    }
    let oddArray = n.filter(el => el % 2)
    let evenArray = n.filter(el => !(el % 2)).sort((a, b) => b - a)
    if (n.length < 2 || oddArray.length === 0) {
        return false
    }
    let res = true
    for (let i = 0; i < oddArray.length; i++) {
        for (let j = 0; j < evenArray.length; j++)
            if (oddArray[i] > evenArray[j]) {
                res = true
            } else {
                return false
            }
    }
    return res
}