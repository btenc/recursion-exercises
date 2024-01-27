// Iterative solution
function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  console.log(arr);
  return arr;
}

fibs(8); //0, 1, 1, 2, 3, 5, 8, 13

// Recursive solution
function fibsRec(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(fib(i));
  }

  function fib(n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  console.log(arr);
  return arr;
}

fibsRec(8); //0, 1, 1, 2, 3, 5, 8, 13
