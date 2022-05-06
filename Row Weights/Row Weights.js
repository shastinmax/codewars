// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
//     The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

function rowWeights(array) {
    let a = 0
    let b = 0
    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? a += array[i] : b += array[i]
    }
    return [a, b]
}