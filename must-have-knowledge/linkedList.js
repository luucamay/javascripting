class Node{
	constructor(data) {
		this.data = data
		this.next = null
	}
			
}

function printList(node){
	let string = ''
	while(node!=null){
		string += node.data + ' '
		node = node.next
	}
	return string
}

function remove_duplicates(node){
	let uniques = []
	let previous = new Node(null)
	while(node!=null){
		if(uniques.includes(node.data)){
			previous.next = node.next
		} else {
			uniques.push(node.data)
			previous = node
		}
		node = node.next
	}
}


let node1 = new Node(8)
let node2 = new Node(12)
let node3 = new Node(13)
let node4 = new Node(8)
let node5 = new Node(7)
let node6 = new Node(13)
let node7 = new Node(13)
let node8 = new Node(13)
let node9 = new Node(11)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = node9

console.log(printList(node1))

remove_duplicates(node1)
console.log(printList(node1))

