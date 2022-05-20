// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
function minSum(arr) {
    let a = arr.sort((a , b) => a - b)
    let b = 0
    for(let i = 0 ; i < a.length / 2; i++){
        b += a[i] * a[a.length - (i + 1)]
    }
    return b
}