// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    let counter=0
    arr.forEach(el=>el===0?++counter:counter+0)
    let newArr=arr.filter(a=>a!==0)
    for(let i=0;i<counter;i++){
        newArr.push(0)
    }
    return newArr
}