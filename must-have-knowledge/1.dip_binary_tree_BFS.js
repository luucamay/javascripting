class Node{
	constructor(val, left= null, right = null){
		this.val = val
		this.left = left
		this.right = right
	}
}
function print_level_order(root){
	let queue = []
	let traverse = ""
	while (root){
		traverse = traverse + root.val + " "
		if (root.left)
			queue.push(root.left)
		if (root.right)
			queue.push(root.right)
		if (queue.length != 0){
			root = queue.shift()
		} else {
			root = null
		}		
	}
	console.log(traverse.slice(0,[-1]))
}

let root = new Node(1, new Node(2), new Node(3, new Node(4), new Node(5)))
print_level_order(root)
