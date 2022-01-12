


function solution(str, ending){
    const a = str.split('')
    const b = ending.length
    return a.slice(str.length-b).join('') === ending
}