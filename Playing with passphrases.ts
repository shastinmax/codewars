// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:
//
//     choose a text in capital letters including or not digits and non alphabetic characters,
//
//     shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
//     keep such as non alphabetic and non digit characters,
//     downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
//     Example:
// your text: "BORN IN 2015!", shift 1
//
// 1 + 2 + 3 -> "CPSO JO 7984!"
//
// 4 "CpSo jO 7984!"
//
// 5 "!4897 Oj oSpC"
//
// With longer passphrases it's better to have a small and easy program. Would you write it?

function playPass(s, n) {

    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let nums = [0,1,2,3,4,5,6,7,8,9]

    let str = ''
    for(let i = 0; i < s.length; i++){
        if(arr_EN.includes(s[i])){
            if(arr_EN.indexOf(s[i]) + n <= 25){
                str += arr_EN[arr_EN.indexOf(s[i]) + n]
            }else{
                str += arr_EN[arr_EN.indexOf(s[i]) + n - 26]
            }
        }
        if(s[i] !== ' ' && nums.includes(+s[i])){
            str += 9 - s[i]
        }
        if(s[i]===' '){
            str += ' '
        }

        if(!arr_EN.includes(s[i]) && !nums.includes(+s[i]) && s[i]!==' '){
            str += s[i]
        }
    }
    return str.split('').map((el,i)=> i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).reverse().join('')
}