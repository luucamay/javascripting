function fibonacci (n){
	if (n == 0)
		return 0
	let a = 0
	let b = 1
	for (let i = 2; i < n; i++){
		let c = a + b
		a = b
		b = c
	}
	return a + b
}

// Test
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
