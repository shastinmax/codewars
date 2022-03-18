// Task
// Given a string str, reverse it omitting all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    return str.replace(/[^a-zа-яё]/gi, '').split('').reverse().join('')
}