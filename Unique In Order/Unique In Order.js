// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
//     For example:
//
//     uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(i){
    if(i.length===1){
        return i.split('')
    }
    let arr1=[]
    if(typeof i === 'string'){
        let arr=i.split('')
        for (let j=0;j<arr.length;j++){
            if(arr[j-1] && arr[j]!==arr[j+1] || !arr[j-1] && arr[j]!==arr[j+1] ){
                arr1.push(arr[j])
            }
        }return arr1
    }
    let arr2=[]
    for (let j=0;j<i.length;j++){
        if(i[j-1] && i[j]!==i[j+1] || !i[j-1] && i[j]!==i[j+1] ){
            arr2.push(i[j])
        }
    }return arr2
}