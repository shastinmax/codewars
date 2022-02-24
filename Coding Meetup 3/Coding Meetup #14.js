// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
//     Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

function orderFood(list) {
    return list.reduce((acc,num)=>{
        let keys=Object.keys(acc)
        keys.find(el => el === num.meal) ? acc[num.meal] += 1 : acc[num.meal] = 1
        return acc
    },{})
}