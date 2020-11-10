class TreeNode {
  constructor(val) {
    this.value = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  hasLeft() {
    return this.left != null;
  }

  hasRight() {
    return this.right != null;
  }

  hasChildren() {
    return this.hasLeft() || this.hasRight();
  }
}

module.exports = TreeNode;
