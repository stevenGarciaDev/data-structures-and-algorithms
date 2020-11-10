class AVLNode {
  constructor(value = null, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = null;
  }
}

class AVLTree {
  constructor(root) {
    this.root = root;
  }

  insert(value) {
    this.root = this.insert(this.root, value);
  }

  // consider the scenarios
  // if the tree is empty,
  // and consider the conditionals
  insert(root, value) {
    if (root === null) {
      return new AVLNode(value);
    }

    if (value < root.value) {
      root.left = insert(root.left, value);
    } else {
      root.right = insert(root.right, value);
    }

    root.height = Math.max(
        this.height(root.left),
        this.height(root.right)) + 1;

    const balanceFactor = this.height(root.left) - this.height(root.right);
    if (balanceFactor > 1) {
      console.log("The tree is left heavy");

      // check the child nodes
      const leftChild = root.left;
      const leftBalanceFactor = this.height(leftChild.left) - this.height(leftChild.right);
      if (leftBalanceFactor < 0) {
        console.log("Need to perform a left-right rotation");
        // right child
      }

    } else if (balanceFactor < -1) {
      console.log("The tree is right heavy");

      // check the child nodes
      const rightChild = root.right;
      const rightBalanceFactor = this.height(rightChild.left) - this.height(rightChild.right);
      if (rightBalanceFactor > 0) {
        console.log("Need to perform a right-left rotation");
      }

    }

    return root;
  }

  private height(node) {
    return (node === null) ? -1 : node.height;
  }
}



module.exports = AVLTree;
