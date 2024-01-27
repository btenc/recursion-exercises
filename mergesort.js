// Recursive Merge Sort algorithm implementation
function mergeSort(arr) {
  //If base case reached, return the number
  if (arr.length == 0) {
    return arr;
  }
  if (arr.length == 1) {
    return arr;
  }
  // Step 1: split current array as evenly as possible
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  // Step 2: Keep splitting subarray as evenly as possible
  //until BASE CASE (array length of one) reached, then merge arrays back together.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergeResult = [];

  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < left.length && rightCount < right.length) {
    if (left[leftCount] < right[rightCount]) {
      mergeResult.push(left[leftCount]);
      leftCount++;
    } else {
      mergeResult.push(right[rightCount]);
      rightCount++;
    }
  }
  while (leftCount < left.length) {
    mergeResult.push(left[leftCount]);
    leftCount++;
  }
  while (rightCount < right.length) {
    mergeResult.push(right[rightCount]);
    rightCount++;
  }
  return mergeResult;
}

console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //10, 20, 22, 30, 33, 50, 55
console.log(mergeSort([63, 1177, 2475, 3427, 3991, 4330, 5099, 5578, 8376])); // 63, 1177, 2475, 3427, 3991, 4330, 5099, 5578, 8376
console.log(mergeSort([2418, 9908, 3109, 1371])); //1371, 2418, 3109, 9908
console.log(mergeSort([])); //[]
