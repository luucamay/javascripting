class Node{
	constructor(value){
		this.value = value
		this.left = null
		this.right = null
	}
}
class BinaryTree{
	constructor(root){
		this.root = new Node(root)
	}
	
	search(find_val){
		return this.preorder_search(this.root, find_val)
	}

	print_tree(){
		return this.preorder_print(this.root,"").slice(0,-1)
	}

	preorder_search(currentNode, find_val){
		if(currentNode){
			if(currentNode.value == find_val){
				return true
			} else {
				return this.preorder_search(currentNode.left, find_val) || this.preorder_search(currentNode.right, find_val)
			}
		}
		return false
	}

	preorder_print(currentNode, traversal){
		if(currentNode){
			traversal += currentNode.value + "-"
			traversal = this.preorder_print(currentNode.left, traversal)
			traversal = this.preorder_print(currentNode.right, traversal)
		}
		return traversal
	}
}

// Test
let tree = new BinaryTree(1)
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(5)

console.log(tree.search(4))
console.log(tree.search(6))
console.log(tree.print_tree())
