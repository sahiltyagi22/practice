//    Given an integer array arr, find the contiguous subarray (containing at least one number)
// which  has the largest sum and returns its sum and prints the subarray.

function largestSumSubArray(arr,n){
    let max = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            let sum =0
            for(let k =i; k<=j; k++){
                sum += arr[k]
            }
            max = Math.max(max , sum)

        }
    }
    return max

}

// let arr = [-2,-3,4,-1,-2,1,5,-3]
// let n = arr.length

// let ans =(largestSumSubArray(arr,n));
// console.log(ans);




/**
 * Better Approach
 */

function largestSumSubArray(arr, n) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// let arr = [-2,-3,4,-1,-2,1,5,-3];
// let n = arr.length;

// let ans = largestSumSubArray(arr, n);
// console.log(ans);



/**
 * OPTIMAL APPROACH
 */


// function kadane(arr,n){
   
//     let maxEnding = arr[0]
//     let maxReach = arr[0]

//     for(let i = 0; i < n; i++){
//          maxEnding = Math.max(arr[i] , maxEnding + arr[i])
//          maxReach = Math.max(maxReach , maxEnding)

//     }
// return maxReach
// }

// let arr = [5,4,-1,7,8];
// let n = arr.length;

// let ans = kadane(arr, n);
// console.log(ans); 


function kadane(arr, n) {
    let maxEnding = arr[0];
    let maxReach = arr[0];

    for (let i = 1; i < n; i++) {
        maxEnding = Math.max(arr[i], maxEnding + arr[i]); 
        maxReach = Math.max(maxReach, maxEnding);
    }

    return maxReach;
}

const arr = [5,4,-1,7,8];
const n = arr.length;
const result = kadane(arr, n);
console.log("Maximum subarray sum:", result);

