// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    let a=[]
    let arrNew=arr.sort((a,b)=>a-b)
    a.push(arrNew[0])
    a.push(arrNew[arrNew.length-1])
    return a
}