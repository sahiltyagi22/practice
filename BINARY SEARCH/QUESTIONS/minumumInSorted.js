/**
 * Brute  === linear search or we can use js inbuilt method  ==> Math.min()
 */

/**
 * better  === Binary search
 */

function Binary(arr,n){
    let low = 0
    let high = n-1
    let ans = Number.MAX_SAFE_INTEGER

    while(low<=high){
      let mid = Math.floor((low+high)/2)

      if(arr[low]<arr[high]){
        ans = Math.min(ans , arr[low])
        break
      }

      if(arr[low]<=arr[mid]){
        ans = Math.min(ans , arr[low])
        low = mid+1
      }else{
        ans  = math.min(ans , arr[mid])
        high = mid-1
      }
    }

    return ans
}

let arr = [4,5,6,7,1,2,3]
let n = arr.length

console.log(Binary(arr,n));



let low = 0
let high = n-1

let ans  = Number.MAX_SAFE_INTERGER

while(low<=high){
        let mid = Math.floor((low+high)/2)

    if(nums[low] <= nums[mid]){
        ans = Math.min(ans , nums[low])
        low = mid+1
    }else{
        ans = Math.min(ans , nums[mid])
        high = mid-1
    }
}

return ans