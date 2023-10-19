// Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

function brute(arr, n) {
  let res;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      res = arr[i];
      return res;
      break;
    }
  }

  return -1;
}

let arr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5];
let n = arr.length;

console.log(brute(arr, n));

/**
 * Optimal
 */

function Optimal(arr) {
  let n = arr.length;

  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;

  while (low <= high) {

    let mid = Math.floor((low+high)/2)
    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) return arr[mid];

    if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
    || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {

low = mid + 1;
}

else {

high = mid - 1;
  }
  }
  return -1;
}

let arr1 = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5];
let n1 = arr.length;

console.log(Optimal(arr1, n1));
