// Find the number with the most digits.
//
//     If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let res=0
    array.map(m=>''+ m).forEach(el=> el.length > (""+res).length ? res = +el : null)
    return res
}
