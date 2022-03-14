// Given a list of integers, return the digits that are not present in any of them.
//
//     Example:
//
// [12, 34, 56, 78]  =>  "09"
//     [2015, 8, 26]     =>  "3479"


function unusedDigits(){
    let num = [...arguments].join('')
    let a = ''
    for(let i = 0; i <= 9; i++){
        if(!num.includes(i)) a += i
    }
    return a
}