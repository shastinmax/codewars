// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.

function highestRank(arr){
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let countMax = 0;
    let valMax = 0;
    for (let element in obj) {
        if (countMax <= obj[element]) {
            valMax = Math.max(element, valMax)
            countMax = Math.max (obj[element], countMax)
        }
    } return valMax
}