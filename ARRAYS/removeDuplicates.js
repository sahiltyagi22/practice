//  remove duplicate elements from a sorted array


/**
 *   BRUTE FORCE  
  */   

// function removeDuplicates(arr, n){
//     let set  = new Set()

//     for(let i=0; i<n; i++){
//         set.add(arr[i])
//     }
   
//    arr = [...set]

//    return arr
// }

// let arr = [1,2,2,3,3,4,5]
// let n = arr.length

// console.log(removeDuplicates(arr,n));



//      OPTIMAL APPROACH (Two Pointer)

function removeDuplicates(arr, n){
    let i =0

    for(j=1; j<n; j++){
        if(arr[j] !== arr[i]){
            arr[i+1] = arr[j]
            i++
          
        }
     
    }

   let m = i+1

   arr = arr.splice(0,m)
   return arr
}


let arr = [1,2,2,3,3,4,5]
let n = arr.length

console.log(removeDuplicates(arr,n));
