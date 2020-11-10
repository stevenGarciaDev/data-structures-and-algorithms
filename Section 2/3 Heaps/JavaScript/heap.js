class MaxHeap {
  constructor() {
    this.heapSize = 0;
    this.heap = [];
  }

  insert(val) {
    // can just push into the heap array,
    // by inserting it as a leaf
    // since JavaScript handles it as an ArrayList
    this.heap.push(val);
    this.heapSize += 1;
    // then must ensure that it satisfies the heap property
    this.bubbleUp();
  }

  // For implementing the remove method, we can only
  // interact with the Root,
  // We'll be removing the Max value in this case,
  // We swap the root value to be replaced with the last value.
  remove() {
    if (this.isEmpty()) {
      throw new Error("IllegalStateException");
    }

    const rootValue = this.heap[0];
    this.heap[0] = this.heap[--this.heapSize];
    this.heapSize--;
    this.heap.pop();

    // then follow the process
    // item (root) < children
    let index = 0;

    this.bubbleDown(index);
    
    return rootValue;
  }

  bubbleDown(index) {
    // this loop details the bubbleDown process
    while (index <= this.heapSize && !this.isValidParent(index)) {
      // determine which child is larger,
      // to find out which one should swap
      let largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);

      // reset the index to the largerChildIndex
      index = largerChildIndex;
    }
  }

  isEmpty() {
    return this.heapSize === 0;
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) <= this.heapSize;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) <= this.heapSize;
  }

  largerChildIndex(index) {
    if (!this.hasLeftChild(index)) {
      return index;
    }

    if (!this.hasRightChild(index)) {
      return this.leftChildIndex(index);
    }

    return (this.leftChild(index) > this.rightChild(index)) ? this.leftChildIndex(index) : this.rightChildIndex(index);
  }

  isValidParent(index) {
    if (!this.hasLeftChild(index)) {
      return true;
    }

    if (!this.hasRightChild(index)) {
      return this.heap[index] >= this.leftChild(index);
    }

    return this.heap[index] >= this.leftChild(index)
            && this.heap[index] >= this.rightChild(index);
  }

  leftChild(index) {
    return this.heap[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.rightChildIndex(index)];
  }

  leftChildIndex(index) {
    return (index * 2) + 1;
  }

  rightChildIndex(index) {
    return (index * 2) + 2;
  }

  bubbleUp() {
    let index = this.heapSize - 1;
    let parentIndex = this.parent(index);
    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parent(index);
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  parent(index) {
    return (index - 1) / 2;
  }

}

module.exports = MaxHeap;
