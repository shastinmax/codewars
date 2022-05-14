// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]
function towerBuilder(nFloors) {
    const result = [];
    for (let i = 1; i <= nFloors; i++) {
        const spaces = ' '.repeat(nFloors - i);
        const stars = '*'.repeat(i * 2 - 1);
        result.push(`${spaces}${stars}${spaces}`)
    }

    return result;
}