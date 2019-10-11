function is_shifted(A, B){
	let size1 = A.length
	let size2 = B.length
	let temp = ''
	if (size1 != size2){
		return false
	}
	temp = A + A
	return temp.includes(B)
}

console.log(is_shifted('abcde','cdeab'))
console.log(is_shifted('abc','acb'))
