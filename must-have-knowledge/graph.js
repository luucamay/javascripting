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
	get_edge_list(){
		let edge_list = []
		for (const edge_object of this.edges){
			let edge = [edge_object.value, edge_object.node_from.value, edge_object.node_to.value]
			edge_list.push(edge)
		}
		return edge_list
	}
	get_adjacency_list(){
		const max_index = this.find_max_index()
		let adjacency_list = new Array(max_index + 1).fill(null)
		for (const edge_object of this.edges){
			if (adjacency_list[edge_object.node_from.value])
				adjacency_list[edge_object.node_from.value].push([edge_object.node_to.value, edge_object.value])
			else
				adjacency_list[edge_object.node_from.value] = [[edge_object.node_to.value,edge_object.value]]
		}
		return adjacency_list
	}
	get_adjacency_matrix(){
		const max_index = this.find_max_index()
		let adjacency_matrix = new Array(max_index + 1).fill(0).map(()=>Array(max_index + 1).fill(0))
		for (const edge_object of this.edges){
			adjacency_matrix [edge_object.node_from.value][edge_object.node_to.value] = edge_object.value
		}
		return adjacency_matrix
	}
	find_max_index(){
		let max_index = -1
		if (this.nodes){
			for (const node of this.nodes)
				if (node.value > max_index)
					max_index = node.value
		}
		return max_index
	}
}

let graph = new Graph()
graph.insert_edge(100,1,2)
graph.insert_edge(101,1,3)
graph.insert_edge(102,1,4)
graph.insert_edge(103,3,4)
console.log(graph.get_edge_list())
console.log(graph.get_adjacency_list())
console.log(graph.get_adjacency_matrix())

