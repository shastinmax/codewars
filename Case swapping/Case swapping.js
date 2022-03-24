// Given a string, swap the case for each of the letters.
//
//     e.g. CodEwArs --> cODeWaRS
//
// Examples
// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"

const swap = str => str.split('').map(m => m === m.toUpperCase() ? m = m.toLowerCase() : m.toUpperCase()).join('')
