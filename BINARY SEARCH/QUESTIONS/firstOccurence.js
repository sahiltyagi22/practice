/**
 * Brute
 */

function first(arr, x) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      if (first == -1) {
        first = i;
      }
      last = i;
    }
  }
  return [first, last];
}

// let arr = [1,2,3,4,4,4,5]
// let x =4

// console.log(first(arr,x));

/**
 * Optimal (using binary)
 */

function firstOccur(arr,x){
    let n = arr.length

    let low = 0
    let high = n-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]===x){
            if(arr[mid]==0 || arr[mid-1] !==x){
                return mid
            }else{
                high = mid-1
            }
        }else if(arr[mid] > x){
            low = mid+1
        }else{
            high = mid-1
        }
    }

    return -1
}

let arr =[1,2,3,4,4,4,5,6]
let x =4

console.log(firstOccur(arr,x));