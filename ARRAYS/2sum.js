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

// let arr1 = [0,1,2,2,3,4,5]
// let n1 = arr1.length
// let k1 = 9

// console.log(twoSum(arr1,n1,k1));


/**
 * Better Solution
 */

//  with hashing

function better(arr,n,target){
    let storage = new Set()

    for(let i=0; i<n; i++){
        let comp = target-arr[i]

        if(storage.has(comp)){
            return true
        }else{
            storage.add(arr[i])
        }
    }

    return false
}

let arr = [1,2,3,4]
let n = arr.length
let k = 8

console.log(better(arr,n,k))




/**
 * Optimal Solution  (two pointer)
 */

function twoSum(arr, n,target){
    arr = arr.sort(function(a,b){return a-b})

    let low = 0
    let high  =n-1

    while(low<high){
       if(arr[low] + arr[high] < target){
        low++
       }else if(arr[low] +arr[high] > target){
        high--
       }else if(arr[low] + arr[high] === target){
        if(arr[low] !== arr[high]){
            return true
        }
       }

       return false
       }
    }
   


// let arr = [1,2,3,4]
// let n = arr.length
// let k = 9

// console.log(twoSum(arr,n,k))