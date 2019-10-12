function fibonacci(n){
	let numbers = new Array(n)
	return fibonacci_helper(n, numbers)
}
function fibonacci_helper(i, memo){
	if(i == 0 || i == 1)
		return i
	if(memo[i]==null || memo[i]=='undefined')
		memo[i] = fibonacci_helper(i-1, memo) + fibonacci_helper(i-2, memo)
	return memo[i]
}

// Test
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
