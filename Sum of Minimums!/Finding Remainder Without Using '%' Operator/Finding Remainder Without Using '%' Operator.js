// Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!
//
//     Assumption
// Dividend will always be greater than or equal to divisor.


const remainder = (D, d) =>D-d*Math.floor(D/d)