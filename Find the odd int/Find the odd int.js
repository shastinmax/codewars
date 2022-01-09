// Given an array of integers, find the one that appears an odd number of times.
//     There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let obj=A.reduce((acc,num)=>{
        const keys=Object.keys(acc)
        if(keys.find(n=>num==n)){
            acc[num]+=1
        }else{
            acc[num]=1
        }return acc
    },{})
    let a=0
    for(let key in obj){
        if(obj[key]%2>0){
            a=key
        }
    }
    return +a
}