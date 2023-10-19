function reverseArray(arr, low , high){

  if(low <high){

    [arr[low] , arr[high]] = [arr[high] , arr[low]]
    reverseArray(arr,low+1 , high-1 )
  }
  return arr
}

let arr = [1,2,3]
let n  = arr.length
let low = 0
let high = n-1

console.log(reverseArray(arr,low,high));