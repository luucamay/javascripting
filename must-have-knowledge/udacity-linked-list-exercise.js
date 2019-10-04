class Element{
	constructor(value){
		this.value = value
		this.next = null
	}
}

class LinkedList{
	constructor(head){
		this.head = head
	}

	append(new_element){
		let current = this.head
		if (this.head){
			while(current.next){
				current = current.next
			}
			current.next = new_element
		} else {
			this.head = new_element
		}

	}
}

// Test cases
let e1 = new Element(1)
let e2 = new Element(2)
let e3 = new Element(3)
let e4 = new Element(4)

let ll = new LinkedList(e1)
ll.append(e2)
ll.append(e3)

console.log(ll.head.next.next.value)
