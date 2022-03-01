// Write a function that removes every lone 9 that is inbetween 7s.
//
// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str){
    return str.split('').map((f,i,arr)=>arr[i]==9 && arr[i+1]==7 && arr[i-1]==7 ? '': f).join('')
}