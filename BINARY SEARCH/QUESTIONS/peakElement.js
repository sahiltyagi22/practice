// Given an array of length N. Peak element is defined as the element greater than both of its neighbors.
//  Formally, if ‘arr[i]’ is the peak element, ‘arr[i – 1]’ < ‘arr[i]’ and ‘arr[i + 1]’ < ‘arr[i]’. 
//  Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.


/**
 * Brute force  ===> linear search
 */


function brute(arr,n){

    if(n===1) return 0
    if(arr[n-1] > arr[n-2]) return n-1

    for(let i=0; i<n; i++){
        if(arr[0] > arr[1]) return i
        
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) return i
    }
    return -1
}

// let arr = [1]
// let n = arr.length

// console.log(brute(arr,n));


/**
 * Optimal approach ==> Binary search
 */

function Binary(arr,n){
    if(n==1) return 0
    if(arr[n-1]>arr[n-2]) return n-1
    if(arr[0] > arr[1]) return 0

    let low =1
    let high =n-2

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid
        else if(arr[mid] > arr[mid-1]){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 5,1]
let n1 = arr1.length

console.log(Binary(arr1,n1));