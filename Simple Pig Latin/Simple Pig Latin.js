// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    let arr=str.split(' ').map(s=>{
        return s!=='!'&& s!=='?'?s.substr(1)+s[0]+'ay':s;
    }).join(' ')
    return arr
}