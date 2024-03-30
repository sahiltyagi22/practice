// Given the heights of N towers and a value of K, Either increase or decrease the height of every tower by K (only once) where K > 0.
//  After modifications, the task is to minimize the difference between the heights of the longest and the shortest tower and output its difference.

function minimizeTheMaximumHeight(arr, n, k) {
    if (n === 0 || n === 1) return;

    arr.sort((a,b)=>a-b)
  
    let ans = arr[n - 1] - arr[0]
  
    let tempMin, tempMax;
    tempMin = arr[0];
    tempMax = arr[n - 1];
  
    for (let i = 1; i < n; i++) {
      if (arr[i] - k < 0) continue;
      tempMax = Math.max(arr[i] + k, arr[n - 1] - k);
      tempMin = Math.min(arr[i] - k, arr[0] + k);
  
      ans = Math.min(ans, tempMax - tempMin);
    }
  
    return ans;
  }
  
  let arr = [ 7, 4, 8, 8, 8, 9 ]
  let n = arr.length
  let k = 6
  
  let result = minimizeTheMaximumHeight(arr, n, k)
  console.log(result);
  