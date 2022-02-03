// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    let arr1=new Set(s1.split(''))
    let newArr1=[]
    arr1.forEach(i=>newArr1.push(i))
    let arr2=new Set(s2.split(''))
    let newArr2=[]
    arr2.forEach(i=>newArr2.push(i))
    let arr3=new Set([...newArr1,...newArr2])
    let newArr3=[]
    arr3.forEach(i=>newArr3.push(i))
    return newArr3.sort().join('')
}