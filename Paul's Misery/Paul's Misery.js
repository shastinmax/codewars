// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!
//
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
//
//     kata = 5
// Petes kata = 10
// life = 0
// eating = 1
function paul(x){
    let count = 0;
    x.map(el => el === 'Petes kata'? count += 10 : el === 'kata' ? count +=5 : el === 'eating' ? count += 1 : null);
    if (count < 40) return 'Super happy!';
    if (count >= 40 && count < 70) return 'Happy!';
    if (count >= 70 && count < 100) return 'Sad!';
    if (count >= 100) return 'Miserable!';
}
