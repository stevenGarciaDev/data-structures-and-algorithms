const MaxHeap = require('./heap');

const heap = new MaxHeap();
heap.insert(4);
heap.insert(6);
heap.insert(5);
heap.insert(10);
console.log(heap);
heap.remove();
console.log("\n");
console.log(heap);
