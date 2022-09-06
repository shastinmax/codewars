// Observe the process with the array given below and the tracking of the sums of each corresponding array.
//
//     [5, 3, 6, 10, 5, 2, 2, 1] (34) ----> [5, 3, 6, 10, 2, 1] ----> (27) ------> [10, 6, 5, 3, 2, 1]  ----> [4, 1, 2, 1, 1] (9) -----> [4, 1, 2] (7)
// The tracked sums are : [34, 27, 9, 7]. We do not register one of the sums. It is not difficult to see why.
//
//     We need the function track_sum ( or trackSum ) that receives an array ( or list ) and outputs a tuple ( or array ) with the following results in the order given below:
//
//     array with the tracked sums obtained in the process
// final array
// So for our example given above, the result will be:
//
//     trackSum([5, 3, 6, 10, 5, 2, 2, 1]) == [[34, 27, 9, 7], [4, 1, 2]]

function trackSum(arr) {
    let arr2 = [...new Set(arr)].sort((a, b) => b - a)
    let arr3 = []

    let sum1 = arr.reduce((acc, item) => acc + item, 0)
    let sum2 = arr2.reduce((acc, item) => acc + item, 0)

    for (let i = 0; i <= arr2.length - 2; i++) {
        arr3.push(arr2[i] - arr2[i + 1])
    }
    let arr4 = [...new Set(arr3)]
    let sum3 = arr3.reduce((acc, item) => acc + item, 0)
    let sum4 = arr4.reduce((acc, item) => acc + item, 0)
    return [[sum1, sum2, sum3, sum4], arr4];
}