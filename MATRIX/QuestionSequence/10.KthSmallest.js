//  find the  kth smallest element in n*n matrix 


function kthSmallest(mat,n,k){

    if(n===0) return -1

    if(k>n) return -1
    
    let temp = mat.flat()
    console.log(temp);
    temp  = temp.sort()

    let element = k-1
    
   return temp[element]
    
  }

  function main(){
    let matrix = [[7,10] , [17,18]]
    let n = matrix.length 
    let k = 1

    let result = kthSmallest(matrix,n,k)
    console.log(result);
  }

  main()