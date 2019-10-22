/*
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */
// First solution O(nlogn)
function is_unique1(string){
	let n = string.length
	let array = string.split("").sort()
	for (let i = 0; i < n - 1; i++){
		if (array[i] == array[i + 1])
			return false
	}
	return true
}

console.log(is_unique1("holaaskjdl"))
console.log(is_unique1("murcielago"))
console.log(is_unique1(""))

