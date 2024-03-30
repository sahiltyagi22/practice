// Given an array of n positive integers and a number k. 
// Find the minimum number of swaps required to bring all the numbers less than or equal to k together



function minimumSwaps(arr, n, k) {
    if (n <= 1) return 0;

    let left = 0;
    let right = n - 1;
    let count = 0;

    while (left < right) {
        while (arr[left] <= k && left < right) {
            left++;
        }

        while (arr[right] > k && left < right) {
            right--;
        }

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            count++;
            left++;
            right--;
        }
    }

    return count;
}


let arr = [2, 1, 5, 6, 3]
let n = arr.length
let k=3

let result = minimumSwaps(arr,n,k)
console.log(result);
