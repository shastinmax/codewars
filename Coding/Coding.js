// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
//     Your task is to return either:
//
// true if all developers in the list code in the same language; or
// false otherwise.

function isSameLanguage(list) {
    let b = []
    let c = true
    list.forEach(f => b.push(f.language))
    for(let i = 0; i < b.length-1; i++){
        if(b[i] !== b[i + 1] ){
            return c = false
        }
    }
    console.log(c)

    return c
}