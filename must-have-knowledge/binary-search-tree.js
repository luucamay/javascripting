class Node{
	constructor(value){
		this.value = value
		this.right = null
		this.left = null
	}
}

class BST{
	constructor(root){
		this.root = new Node(root)
	}

	insert(new_val){
		this.insert_helper(this.root, new_val)
	}

	search(find_val){
		return this.search_helper(this.root, find_val)
	}

	print_tree(){
		return this.inorder_print(this.root, "").slice(0,-1)
	}

	insert_helper(current, new_val){
		if (current.value < new_val){
			if (current.right){
				this.insert_helper(current.right, new_val)
			} else {
				current.right = new Node(new_val)
			}
		} else {
			if (current.left){
				this.insert_helper(current.left, new_val)
			} else {
				current.left = new Node(new_val)
			}
		}
	}

	search_helper(current, find_val){
		if (current){
			if (current.value == find_val){
				return true
			} else if (current.value > find_val){
				this.search_helper(current.left, find_val)
			} else {
				this.search_helper(current.right, find_val)
			}
		}
		return false
	}

	inorder_print(current, traversal){
		if (current){
			traversal = this.inorder_print(current.left, traversal)
			traversal = traversal + current.value + "-"
			traversal = this.inorder_print(current.right, traversal)
		}
		return traversal
	}
}

// Test
let tree = new BST(4)

tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

console.log(tree.print_tree())

console.log(tree.search(4))
console.log(tree.search(6))
