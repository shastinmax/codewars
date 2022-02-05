// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
//     You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
//     ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
//
//     ["a","b","c","d","f"] -> "e"
//     ["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr = array[0] == array[0].toUpperCase() ? arr_EN : arr_en
    let start = arr.indexOf(array[0])
    let finish = arr.indexOf(array[array.length - 1])
    let resArr = arr.slice(start, finish + 1)
    let find = 0
    for (let i = 0; i < resArr.length; i++) {
        if (!array.find(f => f === resArr[i])) {
            find = resArr[i]
        }
    }

    return find;
}