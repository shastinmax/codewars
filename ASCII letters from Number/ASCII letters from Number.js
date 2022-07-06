// You have to create a function that converts integer given as string into ASCII uppercase letters.
//
// 	All ASCII characters have their numerical order in table.
//
// 	For example,
//
// 	from ASCII table, character of number 65 is "A".
// 	Numbers will be next to each other, So you have to split given number to two digit long integers.
//
// 	For example,
//
// 	'658776' to [65, 87, 76] and then turn it into 'AWL'.
// 	Good Luck!
function convert(number) {
	let str = '';
	for (let i = 0; i < number.length; i++) {
		if (i % 2 === 0) {
			str += ` ${number[i]}`;
		} else {
			str += `${number[i]}`;
		}
	}
	return String.fromCharCode(...str.trim().split(' '))
}
const restorantData = {
	menu: [
		{
			name: 'Salad Caesar',
			price: '14$'
		},
		{
			name: 'Pizza Diavola',
			price: '9$'
		},
		{
			name: 'Beefsteak',
			price: '17$'
		},
		{
			name: 'Napoleon',
			price: '7$'
		}
	],
	waitors: [
		{name: 'Alice', age: 22}, {name: 'John', age: 24}
	],
	averageLunchPrice: '20$',
	openNow: true
};

function isOpen(prop) {
	let answer = '';
	prop ? answer = 'Закрыто' : answer = 'Открыто';

	return anwser;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < (+average.slice(0, -1))) {
		return 'Цена ниже средней';
	} else {
		return 'Цена выше средней';
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign({}, data);

	copy.waitors[0] = {name: 'Mike', age: 32};
	return copy;
}

transferWaitors(restorantData);