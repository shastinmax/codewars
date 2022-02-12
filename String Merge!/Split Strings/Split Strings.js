// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
    let newStr = str.length % 2 === 0 ? str.split('') : (str + '_').split('')
    let res = []
    for (let i = 0; i < newStr.length; i += 2) {
        res.push(newStr[i] + newStr[i + 1])
    }
    return res
}

let user={
    name:'max',
    age:'43',
    sayHello(){
        console.log('sdvs')
    }
}
