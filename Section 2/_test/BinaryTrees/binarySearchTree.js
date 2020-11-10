class BinarySearchTree {
  constructor() {
    this.root = new Node();
  }

  // iteratively,
  // Time complexity O(h)
  // Space complexity O(1)
  find(value) {
    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    // consider throwing an exception

    return null;
  }

  // recursively
  // Time complexity O(h)
  // Space Complexity O(h)
  findRecursively(root, value) {
    if (root === null) {
      // consider throwing an exception
      return null;
    }

    if (root.value === value) {
      return root;
    } else if (value < root.value) {
      this.findRecursively(root.left, value);
    } else {
      this.findRecursively(root.right, value);
    }
  }

  insert(value) {
    let current = this.root;
    if (current.value === null) {
      current.value = value;
      return current;
    }

    while (true) {
      if (current.value === value) {
        // consider throwing an exception
        return null;
      } else if (value < current.value) {

        // check if current has a left child
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return current.left;
        }

      } else {

        // check if current has a right child
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return current.right;
        }
      }
    }
  }

  // Public Interface
  recursiveInsert(value) {
    this.insertRecursively(this.root, value);
  }

  insertRecursively(root, value) {
    if (root === null || root.value === value) {

      // thrown an exception
      return null;

    } else if (root.value === null) {

      root.value = value;
      return root;

    } else if (value < root.value) {

      if (root.left) {
        this.insertRecursively(root.left, value);
      } else {
        root.left = new Node(value);
        return root.left;
      }

    } else {

      if (root.right) {
        this.insertRecursively(root.right, value);
      } else {
        root.right = new Node(value);
        return root.right;
      }

    }
  }

  // Traversals

  inOrder(root) {
    if (root === null || root.value === null) {
      return null;
    }

    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  getHeight() {
    return this.height(this.root);
  }

  // calculate height of a node
  height(node) {
    if (node === null) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  toString() {
    this.inOrder(this.root);
    return "";
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* --------------------
Test Code
-------------------- */
let bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(2);
bst.insert(4);
bst.insert(8);
bst.insert(11);

// bst.recursiveInsert(5);
// bst.recursiveInsert(3);
// bst.recursiveInsert(9);
// bst.recursiveInsert(2);
// bst.recursiveInsert(4);
// bst.recursiveInsert(8);
// bst.recursiveInsert(11);

console.log(bst.toString());


const height = bst.getHeight()
console.log(`\nThe height is ${height}`);
