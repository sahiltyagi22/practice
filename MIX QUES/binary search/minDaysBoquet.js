// Problem Statement: You are given ‘N’ roses and you are also given an array ‘arr’  where ‘arr[i]’  denotes that the ‘ith’ rose will bloom on the ‘arr[i]th’ day.
// You can only pick already bloomed roses that are adjacent to make a bouquet. You are also told that you require exactly ‘k’ adjacent bloomed roses to make a single bouquet.
// Find the minimum number of days required to make at least ‘m’ bouquets each containing ‘k’ roses. Return -1 if it is not possible.

/**
 * BRUTE FORCE
 */

function bouquets(arr, n, m, k) {
    if (m * k > n) return -1;

    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for (let i = min; i <= max; i++) {
        if (possible(arr, i, m, k)) {
            return i;
        }
    }
    return -1;
}

function possible(arr, day, m, k) {
    let n = arr.length;

    let count = 0;
    let BN = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= day) {
            count++;
        } else {
            BN += Math.floor(count / k);
            count = 0;
        }
    }

    BN += Math.floor(count / k);
    return BN >= m;
}

// let arr = [7, 7, 7, 7, 13, 11, 12, 7];
// let n = arr.length;
// let k = 3;
// let m = 2;

// console.log(bouquets(arr, n, m, k));


/**
 * Optimal using binary
 */

function binary(arr,n,m,k){
    if(m * k > n) return -1

    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let low  = min
    let high = max

    let ans  =  -1
    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(possible(arr,mid,m,k)){
            ans = mid
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return ans
}

let arr = [7, 7, 7, 7, 13, 11, 12, 7];
let n = arr.length;
let k = 3;
let m = 2;

console.log(binary(arr, n, m, k));

