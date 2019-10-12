/*
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level X such that the sum of all the values of nodes at level X is maximal.
*/
function maxLevelSum(root){
	if (root == null)
		return 0
	let q = [root, null]
	let node = null
	let level = 1
	let maxlevel = level
	let currentSum = 0
	let maxSum = 0
	while (q.length > 0){
		node = q.shift()
		if (node == null){
			if(currentSum > maxSum){
				maxSum = currentSum
				maxLevel = level
			}
			currentSum = 0
			if(q.length > 0){
				q.push(null)
				level ++
			}
		} else {
			currentSum += node.val
			if (node.left)
				q.push(node.left)
			if (node.right)
				q.push(node.right)
		}
	}
	return maxLevel
}
