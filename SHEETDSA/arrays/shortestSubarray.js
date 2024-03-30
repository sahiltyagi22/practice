// Given an array arr[] of integers and a number x, the task is to find the smallest subarray with a sum greater than the given value.

// brute force (using nested loops)

function better(arr, n, x) {
    let sum = 0;
    let minLength = n + 1;
  
    let end = 0;
    let start = 0;
  
    while (end < n) {
      while (sum <= x && end < n) {
        sum += arr[end];
        end++;
      }
  
      while (sum > x && start < n) {
        let length = end - start;
  
        if (length < minLength) {
          minLength = length;
        }
  
        sum -= arr[start];
        start++;
      }
    }
  
    return minLength === n + 1 ? 0 : minLength;
  }
  
  let arr = [1, 4, 45, 6, 0, 19];
  let n = arr.length;
  let x = 51;
  
  let result = better(arr, n, x);
  console.log(result);

  
  
  
  