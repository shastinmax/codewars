// Closure Counter
// Define the function counter that returns a function that returns an increasing value.
//     The first value should be 1.
// You're going to have to use closures.
// Example:
//     const newCounter = counter();
// newCounter() // 1
// newCounter() // 2
// Closure:

function counter() {
    let num = 1
    return function one() {
        return num++
    }
}