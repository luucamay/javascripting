class Queue{
	constructor(head){
		this.storage = [head]
	}
	enqueue(new_element){
		this.storage.push(new_element)
	}
	peek(){
		return this.storage[0]
	}
	dequeue(){
		return this.storage.shift()
	}
}

// Test cases
let q = new Queue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.peek())
console.log(q.dequeue())

q.enqueue(4)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())

q.enqueue(5)
console.log(q.peek())

