// Given an integer array arr of size N, sorted in ascending order (with distinct values).
//  Now the array is rotated between 1 to N times which is unknown.
//  Find how many times the array has been rotated. 



/**
 *  Brute Force  ===> linera search (run a for loop search for the min element  ans then return its index)
 */


/**
 * Optimal approach ===> Binary search
 */

function Binary(arr,n){
    let low = 0
    let high = n-1
    let ans = Number.MAX_SAFE_INTEGER
    let index= 0

    while(low<=high){
      let mid = Math.floor((low+high)/2)

     if(arr[low] < arr[high]){
        if(arr[low] < ans){
            index = low
            ans = arr[low]
        }
        break
     }

     if(arr[low]<=arr[mid]){
        if(arr[low] < ans){
            index = low
            ans = arr[low]
        }
       low = mid+1
     }else{
        if(arr[mid] < ans ){
            index = mid
            ans = arr[mid]
        }
        high = mid-1
    }
}
return index
}

let arr = [4,5,6,7,1,2,3]
let n = arr.length

console.log(Binary(arr,n));