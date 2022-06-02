// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
function minValue(values) {
    let newArr = new Set(values.sort((a, b) => a - b))
    return Number([...newArr].join(''))
}