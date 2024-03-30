// Given an array of n distinct integers sorted in ascending order, write a function that returns a Fixed Point in the array, 
// if there is any Fixed Point present in array, else returns -1. Fixed Point in an array is an index i such that arr[i] is equal to i. 
// Note that integers in array can be negative. 


//  Brute method = linear search
   

// Better method = binary search
function fixedPoint(arr,n){
    
    let low = 0
    let high = n-1 

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] === mid){
            return mid
        }else if(arr[mid] < mid){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1
}

let arr =[0, -5, 8 ,31, 7]
let n = arr.length 
let result = fixedPoint(arr,n)
console.log(result);