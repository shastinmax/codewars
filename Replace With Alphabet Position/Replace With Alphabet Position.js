// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    // If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const result = text.toLowerCase().split('').map(item => alphabet.indexOf(item)+1)
    return (result.filter(f=>f!==0).join(' '))
}