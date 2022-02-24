// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
//     Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.
//
//     For example, given the following input array:

function countLanguages(list) {
    return list.reduce((acc,pers)=>{
        let keys=Object.keys(acc)
        keys.find(el=> el === pers.language) ? acc[pers.language] +=1 : acc[pers.language] =1
        return acc
    },{})
}