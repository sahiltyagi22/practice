// You are given an integer array nums. You are initially positioned at the array's
// first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

function optimal(arr, n) {
  if(n===0) return false 

  let maxReach = 0 

  for(let i=0; i<n; i++){
    if(maxReach < i) return false 

    maxReach = Math.max(maxReach  ,  i+arr[i])

    if(maxReach >=n-1) return true
  }
  return true
}

function main(){
    let arr = [3,2,1,0,4]
    let n = arr.length 

    let result = optimal(arr,n)
    console.log(result);
}
main()