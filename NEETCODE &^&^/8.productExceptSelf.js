function productExceptSelf(arr, n) {
    if(n===0) return []
  
    let result = []
  
    let leftProd = new Array(n).fill(1)
    let rightProd = new Array(n).fill(1)
  
    for(let i=1; i<n; i++){
      leftProd[i] = leftProd[i-1] * arr[i-1]
    }
  
    for(let i=n-2; i>=0; i--){
      rightProd[i] = rightProd[i+1] * arr[i+1]
    }
    
    for(let i=0; i<n; i++){
      result[i] = leftProd[i] * rightProd[i]
    }
  
    console.log(result);
   
  }
  
  function main() {
    let arr = [10, 3, 5, 6, 2];
    let n = arr.length;
  
  
    let result = productExceptSelf(arr, n);
    console.log(result);
  }
  
  main();