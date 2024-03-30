function binary(arr, low, high, target) {
  if (low > high) return -1;

  let n = arr.length;
  if (n === 0) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binary(arr, mid + 1, high, target);
  } else {
    return binary(arr, low, mid - 1, target);
  }
}

let arr = [1, 2, 3, 4, 5];
let target = 4;
let low = 0;
let high = arr.length - 1;

console.log(binary(arr, low, high, target));
