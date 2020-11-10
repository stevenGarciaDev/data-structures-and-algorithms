const Node = require('./TreeNode');

class BinarySearchTree {

  constructor(val) {
    const node = new Node(val);
    this.root = node;
  }

  equals(otherTree) {
    return this.equals(this.root, otherTree.root);
  }

  equals(root, otherRoot) {
    // base case is if one of the nodes are not equal
    if (this.root === null || otherRoot === null)
      return true;

    // are the roots equal,
    if (this.root.value === otherRoot.value) {

      // are the left subtrees equal
      equals(this.root.leftChild, otherRoot.leftChild);
      // are the right subtrees equal
      equals(this.root.rightChild, otherRoot.rightChild);
    }
  }

  // iterative solution
  // return boolean
  find(val) {
    let current = this.root;
    while (current != null) {
      if (current.value === val) {
        return true;
      } else if (current.value < val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  insert(val) {
    let current = this.root;
    // ensure value is not already in tree,
    if (this.find(val))
      return;

    while (current != null) {
      if (current.value < val) {
        if (!current.hasRight()) {
          current.right = new Node(val);
          return;
        }
        current = current.right;
      } else {

        if (!current.hasLeft()) {
          current.left = new Node(val);
          return;
        } else {
          current = current.left;
        }
      }
    }
  }

  getSize() {
    return this.size(this.root);
  }

  size(root) {
    if (root === null)
      return 0;

    return 1 + this.size(root.left) + this.size(root.right);
  }

  getLeavesCount() {
    return this.countLeaves(this.root);
  }

  countLeaves(root) {
    if (root === null)
      return 0;

    if (root.left === null && root.right === null) {
      return 1;
    }

    return this.countLeaves(root.left) + this.countLeaves(root.right);
  }

  getMax() {
    return this.findMax(this.root);
  }

  findMax(root) {
    if (root.right === null)
      return root.value;

    return this.findMax(root.right);
  }

  doesContain(n) {
    return this.contains(this.root, n);
  }

  contains(root, n) {
    if (root === null)
      return false;

    if (root.value === n) {
      return true;
    }

    return this.contains(root.left, n) || this.contains(root.right, n);
  }

  isSibling(value1, value2) {
    return this.areSiblings(this.root, value1, value2);
  }

  areSiblings(root, value1, value2) {
    if (root === null) {
      return false;
    }

    if (root.left === null || root.right === null)
      return;

    const leftChild = root.left;
    //console.log("\nleftChild is " + leftChild.value);
    const rightChild = root.right;
    //console.log("\nrightChild is " + rightChild.value);

    if ((leftChild.value === value1 && rightChild.value === value2)
      || (leftChild.value === value2 && rightChild.value === value1)) {
      return true;
    } else {
      return this.areSiblings(root.left, value1, value2)
        || this.areSiblings(root.right, value1, value2);
    }
  }

  printInOrder() {
    return this.inOrder(this.root);
  }

  inOrder(root) {
    if (root === null)
      return;
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  preOrderIterative() {
    // keep track of values that have been outputted
    // have a stack to keep track of items that need
    // to be fully explored
    let outputSet = new Set();
    let visitedNodesStack = [];

    let current = this.root;
    while (current != null) {
      if (outputSet.has(current.value)) {

      } else {
        console.log(current.value);
        outputSet.add(current.value);

        // if has children then push it to the visitedNodesStack
        if (current.hasChildren()) {
          visitedNodesStack.shift(current);
        }
        if (current.hasLeft) {
          current = current.left;
        }
      }
    }
  }
}

module.exports = BinarySearchTree;
