// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.
//
//     You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
//
// Return that number, or -1 if it is impossible.
//
//     Good Luck!!!
function solve(n) {
    let res = 0;
    while (n >= 500) {
        res++;
        n -= 500
    }
    while (n >= 200) {
        res++;
        n -= 200
    }
    while (n >= 100) {
        res++;
        n -= 100
    }
    while (n >= 50) {
        res++;
        n -= 50
    }
    while (n >= 20) {
        res++;
        n -= 20
    }
    while (n >= 10) {
        res++;
        n -= 10
    }
    return n === 0 ? res : -1
}