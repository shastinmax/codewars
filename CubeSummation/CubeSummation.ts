//Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.
//
// If both numbers are the same, then the range is empty and the result should be 0.

function cubeSum(n, m){
    if(n==m){
        return 0
    }
    let arr=[n,m].sort((a,b)=>a-b)
    let res=0
    for(let i=arr[0]+1;i<=arr[1];i++){
        res+=Math.pow(i,3)
    }
    return res
}