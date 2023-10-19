// Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.

/**
 * Brute Force
 */
function subArray(arr, n, k) {
  if (n === 0) return;

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      let sum = 0;
      for (k = i; k <= j; k++) {
        sum += arr[k];
      }

      if (sum == k) count++;
    }
  }

  return count;
}

// let arr = [3, 1, 2, 4];
// let n = arr.length;
// let k = 6;

// console.log(subArray(arr, n, k));

/**
 * Better Approach (removing the 3rd Loop)
 */

function subArray1(arr, n, k) {
  if (n === 0) return;

  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) count++;
    }
    
  }

  return count;
}

// let arr = [3, 1, 2, 4];
// let n = arr.length;
// let k = 6;

// console.log(subArray1(arr, n, k));


/**
 * Optimal Approach (Two Pointer)
 */


function subArray2(arr,n,k){

    let sum = arr[0]
    let left =0
    let right =0

    let totalNo = 0

    while(right < n){
        while(left <=right && sum >k){
            sum -= arr[left]
            left--
        }
        let count = 0
        if(sum ===k){
            count++
            count = Math.max(count , totalNo)
        }

        right++
        if(right <n) sum += arr[right]
    }
return totalNo
}
let arr = [3, 1, 2, 4];
let n = arr.length;
let k = 6;

console.log(subArray2(arr, n, k));
