/*
 * You are given a root of a binary tree.
 * Find the level for the binary tree with the minimum sum, and return that value.
 * For instance, in the example below, the sums of the trees are 10, 2+8=10, and 4+1+2=7. So, the answer here should be 7.
 *         10
 *         /\
 *      2       8
 *      /\       \
 *    4  1       2
*/
class Node{
	constructor(value, left=null, right=null){
		this.val = value
		this.left = left
		this.right = right
	}
}

function minimum_level_sum(root){
	if (root == null)
		return 0
	let min_sum = root.val
	let queue = [root]
	while (queue.length > 0){
		let count = queue.length
		let sum_val = 0
		while (count > 0){
			count--
			aux = queue.shift()
			sum_val += aux.val
			if (aux.left)
				queue.push(aux.left)
			if (aux.right)
				queue.push(aux.right)
		}
		min_sum = Math.min(sum_val, min_sum)
	}
	return min_sum
}

// Test Case
let node = new Node(10)
node.left = new Node(2)
node.right = new Node(8)
node.left.left = new Node(4)
node.left.right = new Node(1)
node.right.right = new Node(2)

console.log(minimum_level_sum(node))
