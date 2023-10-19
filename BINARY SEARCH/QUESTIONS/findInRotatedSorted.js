// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. 
// Now the array is rotated at some pivot point unknown to you.
//  Find the index at which k is present and if k is not present return -1.

/**
 * Brute force  === linear search
 */


/**
 * Optimal approach
 */

function find(arr,n,x){
    let low =0
    let high =n-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)
    
        if(arr[mid]=== x) return mid

        if(arr[low]<=arr[mid]){
            if(arr[low] <= x && x <=arr[mid]){
                high = mid-1
            }else{
                low = mid+1
            }
        }else{
            if(arr[mid]<=arr[high]){
                if(arr[mid]<=x && x<=arr[high]){
                    low = mid+1
                }else{
                    high = mid-1
                }
            }
        }
    }

    return -1
}

let arr =[1]
let n = arr.length
let x =1

console.log(find(arr,n,x));



