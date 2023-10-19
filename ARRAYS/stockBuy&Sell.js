// You are given an array of prices where prices[i] is the price of a given stock on an ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. 
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0


/**
 * Brute Force O(N*N)
 */


function stockBuySell(arr , n){
  let maximumProfit = 0

  for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        if(arr[j] > arr[i]){
            maximumProfit = Math.max(maximumProfit , arr[j] - arr[i])
        }
    }
  }
  return maximumProfit
}

let arr = [5,6,1,2,3,4,5]
let n = arr.length

let result = stockBuySell(arr,n)
console.log(result);


/**
 * Optimal approach  O(N)
 */


function stockBuySell(arr,n){
    let maxProfit = 0
    let minPrice = Number.MAX_SAFE_INTEGER

    for(let i=0; i<n; i++){
        minPrice = Math.min(minPrice , arr[i])
        maxProfit = Math.max(maxProfit , arr[i]-minPrice)
    }
    return maxProfit
}

let arr1 = [5,6,1,2,3,4,5]
let n1 = arr.length

let result1 = stockBuySell(arr1,n1)
console.log(result);


