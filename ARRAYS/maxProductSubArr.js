// : Given an array that contains both negative and positive integers, find the maximum product subarray.

function brute(arr) {
    let n = arr.length;

    // Check for an empty array
    if (n === 0) {
        return 0; // Return 0 or another appropriate value for an empty array
    }

    let res = -Infinity;
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            product = product * arr[j];
        }
        res = Math.max(product, res);
    }
    return res;
}


// let arr = [1,2,3,4,5,0]

// console.log(brute(arr));

/**
 * Optimal solution
 */

function optimal(arr){
    let n = arr.length

    let prefix =1
    let suffix =1

    for(let i=0; i<n; i++){
        if(prefix == 0) prefix =1
        if(suffix == 0) suffix =1

        prefix =  prefix * arr[i]
        suffix = suffix * arr[n-i-1]

    }

    return Math.max(prefix , suffix)
}


let arr = [2,3,-2,4]

console.log(optimal(arr));