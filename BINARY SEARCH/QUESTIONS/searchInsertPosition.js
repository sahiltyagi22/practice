// You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.
// If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

//   it is exact same as lower bound

function searchInsert(arr, x){
    let low =0
    let high = arr.length-1
    let ans;
    while(low<=high){
        let mid = Math.floor((low+high) /2)

        if(arr[mid]>=x){
            ans = mid
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return ans
}

let arr = [1,2,4,5,6,7]
let x =3

console.log(searchInsert(arr,x));