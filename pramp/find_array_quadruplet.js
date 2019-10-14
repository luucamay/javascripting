/*
 * Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.
 *
 * Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).
*/
function find_array_quadruplet(arr, s){
	let n = arr.length
	if (n < 4)
		return []
	arr.sort((a, b) => a - b)
	for (let i = 0; i < n -3; i++){
		for (let j = i + 1; j < n -2; j++){
			let low = j + 1
			let high = n - 1
			let r = s - (arr[i] + arr[j])
			while (low < high){
				let aux = arr[low] + arr[high]
				if (r > aux)
					low++
				else if (r < aux)
					high--
				else
					return [arr[i], arr[j], arr[low], arr[high]]
			}
		}
	}
	return []
}

// Test
let myarray = [4,4,4,2]
let s = 16
console.log(find_array_quadruplet(myarray, s))
