// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//
//     Example:
var greet = function (name) {
    let newName = name.toLowerCase()
    let res = newName.substr(1)
    return `Hello ${newName[0].toUpperCase()}${res}!`
};