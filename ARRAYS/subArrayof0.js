function largestSubarray(arr, n) {
    let length = 0;
  
    for (let i = 0; i < n; i++) {
      let res = 0;
      for (let j = i; j < n; j++) {
        res += arr[j];
  
        if (res == 0) {
          let len = j - i + 1;
  
          length = Math.max(length, len);
        }
      }
    }
  
    return length;
  }
  
  // let arr = [1, 3, -5, 6, -2];
  // let n = arr.length;
  
  // console.log(largestSubarray(arr, n));


  /**
   * optimal approach
   */
  

  function largest(arr,n){
    let max= 0
    let sum = 0

    let map = new Map()

    for(let i=0; i<n; i++){
      sum += arr[i]

      if(sum === 0){
        max = i
      }else if(map.has(sum)){
        max = Math.max(max , i- map.get(sum))
      }else{
        map.set(sum , i)
      }
    }

    if(max > 0 ){
      return true
    }
     }


  let arr = [9, -3, 3, -1, 6, -5];
  let n = arr.length;

  console.log(largest(arr,n));
