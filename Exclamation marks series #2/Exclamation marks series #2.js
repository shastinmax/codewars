// Remove all exclamation marks from the end of sentence.
//
//     Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

const remove = str =>  {
    let string = str.split('')
    for(let i = string.length - 1; i > 0 ; i--){
        if(string[i] === '!'){
            string.pop()
        } else {break}
    }
    return string.join('')
}