// A new school year is approaching, which also means students will be taking tests.
//
//     The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.
//
//     Return the number of points someone has scored on varying tests of different lengths.
//
//     The given parameters will be:
//
//     An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
//     The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)
function scoreTest(str, right, omit, wrong) {
    //insert code here
    let a = 0
    let b = 0
    let c = 0
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 0: {
                a += right
                break
            }
            case 1: {
                b += omit
                break
            }
            case 2: {
                c += wrong
                break
            }
            default: {
                a += 0
            }
        }
    }
    return a + b - c
}