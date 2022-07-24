// Suzuki needs help lining up his students!
//
// 	Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.
//
// 	You will be given a string of student names. Sort them and return a list of names in descending order.
//
// 	Here is an example input:
//
// 	string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
function lineupStudents(students) {
	return students.trim().split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a))
}

function deleteNth(arr, n) {
	if (arr.length === 0) {
		return []
	}
	let result = []
	let res = arr.reduce((acc, el) => {
		const keys = Object.keys(acc)
		if (keys.includes(el + '')) {
			acc[el] += 1
			if (acc[el] <= n) {
				result.push(el)
			}
		} else {
			acc[el] = 1
			result.push(el)
		}
		return acc
	}, {})
	return result
}