// Return True if there 2 elements (distinct) whose sum is equal to the target


/**
 * Brute Force 
 */

function twoSum(arr, n ,k){
    for(let i=0; i<n; i++){
        for(j=i+1; j<n; j++){
            if(arr[i] == arr[j]){
                continue
            }
            if(arr[i] + arr[j] == k){
                return true
            }
        }
    }
}

let arr1 = [0,1,2,2,3,4,5]
let n1 = arr1.length
let k1 = 9

console.log(twoSum(arr1,n1,k1));


/**
 * Better Solution
 */


//  with hashing



/**
 * Optimal Solution  (two pointer)
 */

function twoSum(arr, n,k){
    arr = arr.sort(function(a,b){return a-b})

    let low = 0
    let high  =n-1

    while(low<high){
        if(arr[low] +arr[high] == k){
            return "yes"
        }else if(arr[low] +arr[high] < k){
            low++
        }else{
            high--
        }
    }
    return "no"
}

let arr = [1,2,3,4,5]
let n = arr.length
let k = 9

console.log(twoSum(arr,n,k))