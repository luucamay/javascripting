/*
 * Given two strings check if one is a permutation of the other.
 * Hints: White spaces count?, Case sensitive?
 */
// First solution O(n)
function checkPermutation1(a, b){
	let size_a = a.length
	let size_b = b.length
	if (size_a != size_b)
		return false

	let letters = Array(128).fill(0)

	for (let i = 0; i < size_a; i++){
		let value = a.charCodeAt(i)
		letters[value] += 1
	}
	for (let j = 0; j < size_b; j++){
		let value = b.charCodeAt(j)
		letters[value] -= 1
		if (letters[value] < 0)
			return false
	}
	return true
}
// Second solution O(nlogn)
function checkPermutation2(a, b){
	let size_a = a.length
	let size_b = b.length
	if (size_a != size_b)
		return false

	a = a.split('').sort().join('')
	b = b.split('').sort().join('')

	if (a == b)
		return true
	else
		return false
}
// Test
console.log(checkPermutation1('abcd','dcba'))
console.log(checkPermutation1('abcdo','adcba'))
console.log(checkPermutation2('abcd','dcba'))
console.log(checkPermutation2('abcdo','adcba'))
