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
	append(new_lement){
		let current = this.head
		if(this.head){
			while(current.next)
				current = current.next
			current.next = new_element
		} else {
			this.head = new_element
		}
	}
	insert_first(new_element){
		if(this.head)
			new_element.next = this.head
		this.head = new_element
	}
	delete_first(){
		let deleted = this.head
		if(this.head){
			this.head = this.head.next
			deleted.next = null
		}
		return deleted
	}
}

class Stack{
	constructor(top){
		this.ll = new LinkedList(top)
	}
	push(new_element){
		this.ll.insert_first(new_element)
	}
	pop(){
		return this.ll.delete_first()
	}
}

// Test cases

let e1 = new Element(1)
let e2 = new Element(2)
let e3 = new Element(3)
let e4 = new Element(4)

let stack = new Stack(e1)

stack.push(e2)
stack.push(e3)
console.log(stack.pop().value)
console.log(stack.pop().value)
console.log(stack.pop().value)
console.log(stack.pop())
stack.push(e4)
console.log(stack.pop().value)
