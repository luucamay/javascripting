/*Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the 
iterative code in the instructions.*/

function get_fib(position){
	if (position == 0)
		return 0
	if (position == 1)
		return 1
	if (position > 1)
		return get_fib(position - 1) + get_fib(position - 2)
	return -1
}

// Test cases
console.log(get_fib(9))
console.log(get_fib(11))
console.log(get_fib(0))
