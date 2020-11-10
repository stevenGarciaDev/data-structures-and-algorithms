const BinarySearchTree = require('./BinarySearchTree');

let bst = new BinarySearchTree(10);
console.log(bst.find(10));
bst.insert(6);
bst.insert(2);
bst.insert(7);
bst.insert(9);
bst.insert(12);

console.log(`Leaves count: ${bst.getLeavesCount()}`);
console.log(`Size of tree: ${bst.getSize()}`);
console.log(`Max value: ${bst.getMax()}`);
console.log(`Contains 5?: ${bst.doesContain(5)}`);
console.log(`Contains 4?: ${bst.doesContain(4)}`);
console.log(`Print in order: `, bst.printInOrder());
console.log(`Are 2 and 7 siblings?: ${bst.isSibling(2, 7)}`);
