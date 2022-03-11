// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let arr = [0]
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            arr.push(i)
        }
    }
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        arr[i + 1] !== undefined
            ? str += ` ${string.slice(arr[i], arr[i + 1])}`
            : str += ` ${string.slice(arr[i])}`
    }
    return str.trim()
}