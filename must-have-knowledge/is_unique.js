/*
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 * Hints: ascci or unicode?, Hash Table? Bit Vector?, O(nlogn)
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

// Second solution O(n)
function is_unique2(string){
	let n = string.length
	let letters = Array(128).fill(0)
	for (let i = 0; i < n; i++){
		let value = string.charCodeAt(i)
		if (letters[value])
			return false
		letters[value] = 1
	}
	return true
}
console.log(is_unique1("holaaskjdl"))
console.log(is_unique1("murcielago"))
console.log(is_unique1(""))
console.log(is_unique2("holaaskjdl"))
console.log(is_unique2("murcielago"))
console.log(is_unique2(""))

