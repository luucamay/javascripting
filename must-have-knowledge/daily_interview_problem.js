function longest_consecutive(numbers){
	let longest_len = 0
	numbers.sort((a,b) => a -b)
	let aux_counter = 1
	for (let i = 1; i < numbers.length; i++){
		let next_consecutive = parseInt(numbers[i - 1]) + 1
		let next_number = parseInt(numbers[i])
		if(next_consecutive == next_number){
			aux_counter++
		} else {
			if (longest_len < aux_counter)
				longest_len = aux_counter
			aux_counter = 1
		}
	}
	return longest_len
}

// Test
let test1 = [8, 10, 13, 14, 1, 100, 7, 6, 9, 5]
let test2 = [100, 4, 200, 1, 3, 2]
console.log(longest_consecutive(test1))
console.log(longest_consecutive(test2))
