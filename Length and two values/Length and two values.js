// Given an integer n and two other values, build an array of size n filled with these two values alternating.
//
//     Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
function alternate(n, firstValue, secondValue) {
    let res = []
    let pop
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        res.push(firstValue)
        res.push(secondValue)
    }
    if (n % 2 !== 0) {
        pop = res.pop()
    }
    return res
}

