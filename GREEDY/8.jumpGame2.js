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