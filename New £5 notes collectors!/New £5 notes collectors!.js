// The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!
//
// 	Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.
//
// £££ GOOD LUCK! £££
function getNewNotes(salary, bills) {
	let sum = salary - bills.reduce((a, b) => a + b, 0);
	return sum > 0 ? Math.floor(sum / 5) : 0;
}

// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
//
// 	Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
function titleCase(title, minorWords) {
	if (!title) {
		return ''
	}
	if (!minorWords) {
		title = title.toLowerCase().split(' ')
		for (let i = 0; i < title.length; i++) {
			title[i] = title[i][0].toUpperCase() + title[i].slice(1)
		}
	}
	if (minorWords) {
		minorWords = minorWords.toLowerCase().split(' ')
		title = title.toLowerCase().split(' ')
		for (let i = 0; i < title.length; i++) {
			if (minorWords.includes(title[i]) && i === 0) {
				title[i] = title[i][0].toUpperCase() + title[i].slice(1)
			}
			if (!minorWords.includes(title[i])) {
				title[i] = title[i][0].toUpperCase() + title[i].slice(1)
			}
		}
	}
	return title.join(' ')
}