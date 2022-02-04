// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.
//
//     Examples
// 420 should return ["4", "42", "420"]

function createArrayOfTiers(num) {
    let str =num.toString()
    let arr=[]
    let newStr=''
    for(let i=0;i<str.length;i++){
        arr.push(newStr+=str[i])
    }
    return arr;
}