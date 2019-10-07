class Node{
	constructor(value){
		this.value = value
		this.edges = []
	}
}

class Edge{
	constructor(value, node_from, node_to){
		this.value = value
		this.node_from = node_from
		this.node_to = node_to
	}
}

class Graph{
	constructor(nodes = [], edges = []){
		this.nodes = nodes
		this.edges = edges
	}
	insert_node(new_node_val){
		let new_node = new Node(new_node_val)
		this.nodes.push(new_node)
	}
	insert_edge(new_edge_val, node_from_val, node_to_val){
		let from_found = null
		let to_found = null
		let nodes_length = this.nodes.length
		for (let i = 0; i < nodes_length; i++){
			let node = this.nodes[i]
			if (node_from_val == node.value){
				from_found = node
			}
			if (node_to_val == node.value){
				to_found = node
			}
		}
		if (from_found == null){
			from_found = new Node(node_from_val)
			this.nodes.push(from_found)
		}
		if (to_found == null){
			to_found = new Node(node_to_val)
			this.nodes.push(to_found)
		}
		let new_edge = new Edge(new_edge_val, from_found, to_found)
		from_found.edges.push(new_edge)
		to_found.edges.push(new_edge)
		this.edges.push(new_edge)
	}
}

let graph = new Graph()
graph.insert_edge(100,1,2)
graph.insert_edge(101,1,3)
graph.insert_edge(102,1,4)
graph.insert_edge(103,3,4)
console.log(graph)
