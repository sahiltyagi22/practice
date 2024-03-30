// Given an array prices[] of length N, representing the prices of the stocks on different days, 
// the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed.

// BRUTE APPROACH (using 2 for loops)

function brute(arr,n){
    if(n<=1) return

    let maxProfit = 0

    for(let i=0; i<n-1; i++){
        for(j=i+1; j<n; j++){
            let sum = arr[j] - arr[i]
            maxProfit = Math.max(maxProfit , sum)
        }
    }

    return maxProfit
}

// let arr = [7, 6, 4, 3, 1]
// let n = arr.length

// let result = brute(arr,n)
// console.log(result);


// Better approach 
function better(arr, n) {
    if (n <= 1) {
        return 0;
    }

    let maxProfit = 0;
    let maxValue = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        maxValue = Math.max(maxValue, arr[i]);
        let sum = maxValue - arr[i]
        maxProfit = Math.max(maxProfit, sum);
    }

    return maxProfit;
}

// let arr = [7, 1, 5, 3, 6, 4];
// let n = arr.length;

// let result = better(arr, n);
// console.log(result); // Output: 5
;


// gfg version

function gfg(arr, n) {
    if (n <= 1) return [];

    let maxProfit = 0;
    let maxValue = arr[n - 1];
    let list = [];

    for (let i = n - 2; i >= 0; i--) {
        maxValue = Math.max(maxValue, arr[i]);
        let profit = maxValue - arr[i];

        if (profit > 0) {
            list.push([i, arr.indexOf(maxValue)]);
        }
    }

    return list.reverse();
}

let arr = [7, 1, 5, 3, 6, 4];
let n = arr.length;

let result = gfg(arr, n);
console.log(result); // Output: 5
