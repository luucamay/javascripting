function quicksort(array){
	return quicksort_helper(array, 0, array.length - 1)
}

function quicksort_helper(elements, start, end){
	if (start < end){
		let pivot_index = partition(elements, start, end)
		quicksort_helper(elements, start, pivot_index - 1)
		quicksort_helper(elements, pivot_index + 1, end)
	}
	return elements
}

function partition(elements, start, end){
	let storeIndex = start + 1
	for (let i = start + 1; i <= end; i++){
		if(elements[i] < elements[start]){
			[elements[storeIndex], elements[i]] = [elements[i], elements[storeIndex]];
			storeIndex++
		}
	}
	[elements[start], elements[storeIndex - 1]] = [elements[storeIndex - 1], elements[start]]

	return storeIndex - 1
}

// Test
let test = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
console.log(test)
console.log(quicksort(test))
