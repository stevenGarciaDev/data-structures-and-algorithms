/*
This implementation uses an adjacency list represented as an
array of linked list.
The linked list is doubly to allow easier removal.
A hash table is used to map labels to the index in the adjacency list.
*/
class Graph {
    constructor() {
        this.hashTable = {}; // maps char => int
        this.adjacencyList = [];
    }

    addNode(label) {
        if (!(label in this.hashTable)) {
            // add it to the hash table for future referencing
            this.hashTable[label] = this.adjacencyList.length;
            this.adjacencyList.push(new ListNode(null));
        }
    }

    // undirected graph
    addEdge(from, to) {
        const fromNodeIndex = this.hashTable[from];
        const toNodeIndex = this.hashTable[to];

        if (fromNodeIndex === null || toNodeIndex === null) {
          throw "Unable to make edge connection";
        }

        let currentNode = this.adjacencyList[fromNodeIndex];
        this.addToLinkedList(currentNode, to);

        // currentNode = this.adjacencyList[toNodeIndex];
        // this.addToLinkedList(currentNode, from);
    }

    addToLinkedList(head, value) {
        let currentNode = head;
        while (currentNode != null) {
            if (currentNode.label == null) {
                currentNode.label = value;
            } else if (currentNode.label === value) {
                break;
            } else if (currentNode.next === null) {
                const newNode = new ListNode(value);
                currentNode.next = newNode;
                newNode.previous = currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    removeNode(label) {
        // retrieve index from hash table
        // remove from hash table
        // go to adjacency list using the index
        // traverse through all the adjacency list and
        // remove occurences of the label
        const index = this.hashTable[label];
        this.adjacencyList.slice(index, 1); // remove from adjacency list
        delete this.hashTable[label];

        this.adjacencyList.forEach((head, index) => {
            let current = head;
            while (current != null) {
                if (current.label === label) {
                    // if stored in the head
                    if (current.label === head.label) {
                        const nextNode = current.next;
                        current.next = null;
                        this.adjacencyList[index] = nextNode;
                    } else {
                        const previous = current.previous;
                        previous.next = current.next;
                    }
                    current = current.next;
                    continue;
                }
                current = current.next;
            }
        });
    }

    removeEdge(from, to) {
        // we are removing from a linked list
        const fromIndex = this.hashTable[from];
        const toIndex = this.hashTable[to];

        if (fromIndex === null || toIndex === null) {
            throw "Unable to make edge connection";
        }

        let current = this.adjacencyList[fromIndex];
        this.removeFromLinkedList(current, to, fromIndex);

        // current = this.adjacencyList[toIndex];
        // this.removeFromLinkedList(current, from, toIndex);
    }

    removeFromLinkedList(head, value, listIndex) {
        let current = head;
        while (current != null) {
            if (current.label === value) {
                // handle the case when removing value from head
                if (current.label == head.label) {
                    // is there a next node?
                    this.adjacencyList[listIndex] = current.next;
                    current.next = null;
                } else if (current.next === null) {
                    // tail of the linked list
                    const previous = current.previous;
                    previous.next = null;

                    current.previous = null;
                } else {
                    // remove node from middle of linked list
                    const previous = current.previous;
                    const next = current.next;
                    previous.next = next;
                    next.previous = previous;

                    // dereference the pointers to enable garbage collection
                    current.next = null;
                    current.previous = null;
                }
                break;
            }
            current = current.next;
        }
    }

    recursiveDepthFirstSearch(label) {
        // const index = this.hashTable[label];
        // const head = this.adjacencyList[index];
        const set = new Set();
        this._recursiveDepthFirstSearch(label, set);
    }

    _recursiveDepthFirstSearch(label, visitedNodesSet) {
        if (label === null)
            return;

        let node = this.retrieveNode(label);

        if (node === null || node.label === null) {
            return;
        } else if (visitedNodesSet.has(node.label)) {
            return;
        }
        console.log(`Visited: ${node.label}`);
        // traverse through linked list and perform search
        while (node != null) {
            visitedNodesSet.add(node.label);
            this._recursiveDepthFirstSearch(node.label, visitedNodesSet);
            node = node.next;
        }
    }

    iterativeDepthFirstSearch(label) {
        let node = this.retrieveNode(label);

        if (node === null)
            return;

        let stack = [node];
        const visitedSet = new Set();

        while (stack.length > 0) {
            const topOfStack = stack.pop();
            if (visitedSet.has(topOfStack.label)) {
                continue;
            } else {
                visitedSet.add(topOfStack.label);
                if (topOfStack.label != null)
                    console.log(`Visited: ${topOfStack.label}`);
            }

            const nextNode = this.retrieveNode(topOfStack.label);
            if (nextNode != null)
                stack.push(nextNode);
        }
    }

    // Queue
    // Front [] Back
    breadthFirstSearch(label) {
        if (label === null)
            return;
        let queue = [label];
        let exploredSet = new Set();

        while (queue.length > 0) {
            const label = queue.shift();
            let current = this.retrieveNode(label);

            while (current != null) {
                if (!exploredSet.has(current.label) && current.label) {
                    console.log(`Visited: ${current.label}`);
                    queue.push(current.label);
                }
                current = current.next;
            }
            exploredSet.add(label);
        }
    }

    retrieveNode(label) {
        const index = this.hashTable[label];
        const node = this.adjacencyList[index];
        return node;
    }

    print() {
        let keys = Object.keys(this.hashTable);
        console.log(keys);
        keys.forEach(key => {
            const index = this.hashTable[key];
            let current = this.adjacencyList[index];
            while (current != null) {
                if (current.label != undefined)
                    console.log(`${key} connected to ${current.label}`);
                current = current.next;
            }
        });
    }
}

class ListNode {
    constructor(label) {
        this.label = label;
        this.previous = null;
        this.next = null;
        this.startTime = 0;
        this.endTime = 0;
    }
}

/* ----------
Test Code
---------- */
let myGraph = new Graph();
myGraph.addNode('A');
myGraph.addNode('B');
myGraph.addNode('C');
myGraph.addNode('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'D');
myGraph.addEdge('A', 'C');
myGraph.addEdge('D', 'C');
myGraph.recursiveDepthFirstSearch('A');
console.log("---");
myGraph.recursiveDepthFirstSearch('B');
console.log("---");
myGraph.recursiveDepthFirstSearch('C');
console.log("---");
myGraph.recursiveDepthFirstSearch('D');

console.log("\n\n----------");
myGraph.iterativeDepthFirstSearch('A');
console.log("---");
myGraph.iterativeDepthFirstSearch('B');
console.log("---");
myGraph.iterativeDepthFirstSearch('C');
console.log("---");
myGraph.iterativeDepthFirstSearch('D');



// myGraph.print();
console.log("\n\n----------");
console.log("\n\nBFS\n");
myGraph.breadthFirstSearch('A');
console.log("---");
myGraph.breadthFirstSearch('B');
console.log("---");
myGraph.breadthFirstSearch('C');
console.log("---");
myGraph.breadthFirstSearch('D');


// myGraph.removeEdge('A', 'C');
// myGraph.print();
// console.log("----------");
// myGraph.removeNode('A');
// myGraph.print();
