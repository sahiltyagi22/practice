function longest(arr,n,k){
 let left = 0
 let right = 0

 let sum = 0
 let length = 0

 while(right <n){
  if(left < right){
    sum += arr[right] 
    right++ 
  }

  if(sum %k !==0){
    sum -= left
    left++
  } else if(sum %k === 0){
    length = Math.max(length , right-left +1)
  }
 }
 return length
}

let arr = [2, 7, 6, 1, 4, 5]
let n = arr.length
let k = 7

console.log(longest(arr,n,k));




