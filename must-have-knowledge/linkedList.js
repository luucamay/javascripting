class Node{
	constructor(data) {
		this.data = data
		this.next = null
	}
}

// create first node
const head = new Node(8)

// add a second node
head.next = new Node(12)

// add a third node
head.next.next = new Node(8)

console.log(head)
