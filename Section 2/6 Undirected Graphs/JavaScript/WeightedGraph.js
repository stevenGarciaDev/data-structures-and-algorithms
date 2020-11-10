class WeightedGraph {
  constructor() {
    this.hashTable = {}; // maps char to int to find index in adjacencyList
    this.adjacencyList = []; // graph, array of linked lists (mapping edges)
  }

  addNode(label) {
    // check if the node is already in the graph
    // otherwise, add it to the adjacencyList and
    // set its mapping in the hashTable
    if (!(label in hashTable)) {
      hashTable[label] = adjacencyList.length + 1;
      adjacencyList.push(new Node(null));
    }
  }

  addEdge(from, to, weight) {

  }
}

class Node {
  constructor(label = '') {
    this.label = label;
  }
}

class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
