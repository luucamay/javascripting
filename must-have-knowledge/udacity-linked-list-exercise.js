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

	get_position(position){
		let current = this.head
		let index = 1
		while(current && index <= position){
			if(index == position){
				return current
			}
			current = current.next
			index ++
		}
		return null
	}

	insert(new_element, position){
		let current = this.head
		let index = 1
		if (position > 1){
			while(current && index < position){
				if(index == position - 1){
					new_element.next = current.next
					current.next = new_element
				}
				current = current.next
				index ++
			}
		} else if (position == 1){
			new_element.next = this.head
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
console.log(ll.get_position(3).value)

ll.insert(e4,3)
console.log(ll.get_position(3).value)

