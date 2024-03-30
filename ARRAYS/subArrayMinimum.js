// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr.
// Since the answer may be large, return the answer modulo 109 + 7.

// Example 1:

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.



// brute approach O(n*n)
function brute(arr,n){
    if(n<=1) return arr 
  
    let sum = 0
    
    for(let i=0; i<n; i++){
      let currentMin = arr[i]
      for(let j=i; j<n; j++){
        currentMin = Math.min(currentMin , arr[j])
        sum += currentMin
      }
      
    }
  
    return sum
  }
  
  
  function main() {
    let arr = [3,1,2,4];
    let n = arr.length;
  
    let result = check(arr, n);
    console.log(result);
  }
  main();
  