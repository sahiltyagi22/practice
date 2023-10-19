// Problem Statement: Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k.
//  Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False. 

function find(arr,n,x){
    let low =0
    let high =n-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
            low = low + 1;
            high = high - 1;
            continue;
        }



        if(arr[mid]=== x) return 1

        if(arr[low] <= arr[mid]){
            if(arr[low]<=target && target <= arr[mid]){
                high = mid-1
            }else{
                low = mid+1
            }
        }else{
            if(arr[mid] <=target && target<= arr[high]){
                low  = mid+1
            }else{
                high = mid-1
            }
        }
    }
    return 0
}

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let n = arr.length
let k = 3

console.log(find(arr,n,k));