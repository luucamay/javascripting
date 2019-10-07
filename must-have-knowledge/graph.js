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
	constructor(nodes, edges){
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
		// keep building
	}
}
