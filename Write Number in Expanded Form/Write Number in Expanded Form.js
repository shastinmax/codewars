// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// 	expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!
function expandedForm(num) {
	let res = []
	let number = num + ''
	for (let i = 0; i < number.length; i++) {
		if (number[i] !== '0') {
			res.push(number[i] + '0'.repeat(number.length - (i + 1)))
		}
	}
	return res.join(',').replace(/,/gi, ' + ')
}

function evenOrOdd(str) {

	const array = str.split('');

	let odd = [];
	let even = [];

	for(let i = 0; i < array.length; i++){
		array[i] = Number(array[i])
		array[i] % 2 === 0 ? even.push(array[i]) : odd.push(array[i])
	}

	odd = odd.reduce((acc, item) => acc + item, 0);
	even = even.reduce((acc, item) => acc + item , 0);

	if(even > odd) return 'Even is greater than Odd';
	if(even < odd) return 'Odd is greater than Even';
	if(even === odd) return 'Even and Odd are the same';
}