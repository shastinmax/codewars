// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.
//
// Example
// findSum(1,2,3,4); // returns 10
// findSum(1,-2);    // returns -1
// findSum();        // returns 0
function findSum(){
    console.log([...arguments])
    if([...arguments].length === 0){
        return 0
    }
    if([...arguments].some(el=>el<0)){
        return -1
    }
    if([...arguments].length === 1){
        return 0
    }
    return ([...arguments].reduce((a,b)=>a+b))
}