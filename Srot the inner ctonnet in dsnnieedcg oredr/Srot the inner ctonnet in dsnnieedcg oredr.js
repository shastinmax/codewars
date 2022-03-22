// You have to sort the inner content of every word of a string in descending order.
//
//     The inner content is the content of a word without first and the last char.
//
//     Some examples:
//
//     "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
// "wait for me"        -->  "wiat for me"
// "this kata is easy"  -->  "tihs ktaa is esay"
// Words are made up of lowercase letters.
//
//     The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.
//
//     Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!


function sortTheInnerContent(words) {
    let str = ''
    let a
    let b
    let arr = words.split(' ')
    arr.forEach(el => {
        if (el.length < 4) {
            str += `${el} `
        } else {
            a = el.split('').shift()
            b = el.split('').pop()
            let elem = el.substr(1, el.length - 2).split('').sort().reverse().join('')
            elem = `${a}${elem}${b} `
            str += elem
            console.log(a, b, str)
        }
    })
    return str.trim()
}