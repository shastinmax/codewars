// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    let counterO=0
    let counterX=0
    str=str.toLowerCase().split('').forEach(i=>i==='x' ? counterX += 1 : i==='o' ? counterO +=1 : null )
    return counterO===counterX
}