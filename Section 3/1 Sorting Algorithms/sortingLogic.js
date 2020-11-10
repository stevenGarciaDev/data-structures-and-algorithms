function bubbleSort(list) {
    // continually compare and perform swap
    let isSorted;
    for (let i = 0; i < list.length; i++) {
        isSorted = true;

        for (let n = 1; n < list.length - i; n++) {
            if (list[n - 1] > list[n]) {
                // perform swap
                const temp = list[n - 1];
                list[n - 1] = list[n];
                list[n] = temp;
                isSorted = false;
            }
        }
        if (isSorted)
            return;
    }
}

/* --------------- */

function selectionSort(list) {
    for (let n = 0; n < list.length; n++) {
        let minIndex = n;
        for (let i = n + 1; i < list.length; i++) {
            if (list[minIndex] > list[i]) {
                minIndex = i;
            }
        }
        const temp = list[n];
        list[n] = list[minIndex];
        list[minIndex] = temp;
    }
}

/* --------------- */

// current = 4
// 2, 8    8, 1, 3
function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let current = list[i];
    let n = i - 1;
    while (n >= 0 && list[n] > current) {
      // shift item to the right
      list[n + 1] = list[n];
      n--;
    }
    list[n + 1] = current;
  }
}

/* --------------- */

function mergeSort(list) {
  if (list.length < 2)
    return;

  const middleIndex = Math.round( list.length / 2 );

  // in JavaScript, we could just use the slice method
  // but this implementation works with C-based languages
  //let leftArray = new Array(middleIndex);
  let leftArray = [];
  for (let i = 0; i < middleIndex; i++)
    leftArray.push(list[i]);
    //leftArray[i] = list[i];

  //let rightArray = new Array(list.length - middleIndex);
  let rightArray = [];
  for (let i = middleIndex; i < list.length; i++)
    rightArray.push(list[i])
    //rightArray[i - middleIndex] = list[i];


  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(leftArray, rightArray, list);
}

function merge(left, right, list) {
  let index = 0;
  let leftPtr = 0;
  let rightPtr = 0;

  while (leftPtr < left.length && rightPtr < right.length) {
    if (left[leftPtr] < right[rightPtr]) {
      list[index++] = left[leftPtr++];
    } else {
      list[index++] = right[rightPtr++];
    }
  }

  while (leftPtr < left.length)
    list[index++] = left[leftPtr++];

  while (rightPtr < right.length)
    list[index++] = right[rightPtr++];
}


/* --------------- */

function quickSort(list) {
  _quickSort(list, 0, list.length-1);
}

function _quickSort(list, start, end) {
  if (start >= end)
    return;

  const boundary = partition(list, start, end);

  _quickSort(list, start, boundary - 1);
  _quickSort(list, boundary + 1, end);
}

function partition(list, start, end) {
  const pivotValue = list[end];
  let boundary = start - 1;
  for (let i = start; i <= end; i++) {
    if (list[i] <= pivotValue) {
      boundary++;
      const temp = list[i];
      list[i] = list[boundary];
      list[boundary] = temp;
    }
  }

  return boundary;
}

/* --------------- */

function countingSort(list) {

}

function bucketSort(list) {

}

let randomList = [7, 8, 1, 10, 6, 6, 2];
bubbleSort(randomList);
console.log(`Bubble sort: ${randomList}\n`);

randomList = [7, 8, 1, 10, 6, 6, 2];
selectionSort(randomList);
console.log(`Selection sort: ${randomList}\n`);

randomList = [7, 8, 1, 10, 6, 6, 2];
insertionSort(randomList);
console.log(`Insertion sort: ${randomList}\n`);

randomList = [7, 8, 1, 10, 6, 6, 2];
mergeSort(randomList);
console.log(`Merge sort: ${randomList}\n`);

randomList = [7, 8, 1, 10, 6, 6, 2];
quickSort(randomList);
console.log(`Quick sort: ${randomList}\n`);
