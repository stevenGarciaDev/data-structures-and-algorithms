// take in an array,
// modify array in place to satisfy the
// max heap property
function heapify(arr) {
  // basically we loop through the array and
  // perform the bubbleDown operation
  for (let i = 0; i < arr.length; i++) {
    const parent = arr[i];

    // need to check if satisfies the heap property
    // so need leftChild and right child

    const leftChild = ((i * 2 + 1) > arr.length) ? arr[i * 2 + 1] : null;
    const rightChild = ((i * 2 + 2) > arr.length) ? arr[i * 2 + 2] : null;

    // now consider each case


    // parent is leaf?
    if (leftChild === null && rightChild === null) {
      continue;
    }

    // parent has only left (no right)
    if (rightChild === null) {
      if (parent < rightChild) {
        // then need to perform swap
        swap(arr, i, i * 2 + 1);
      }
    }

    // parent has both left and right, and
    if (parent > leftChild && parent > rightChild) {
      continue; // next iteration
    } else {

      // if parent does not satisfy the heap property
      // find out which child is larger
      if (leftChild > rightChild) {
        swap(arr, i, i * 2 + 1);
      } else {
        swap(arr, i, i * 2 + 2);
      }
    }
  }
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let arr = [5, 3, 8, 4, 1, 2];
heapify(arr);
console.log("arr after heapify is ", arr);
