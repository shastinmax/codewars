//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
    return +arr.filter((el, i, arrs) => arrs.indexOf(el) === arrs.lastIndexOf(el)).join('')
}