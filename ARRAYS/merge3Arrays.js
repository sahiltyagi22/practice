function merge(arr1,arr2,arr3){
  

let res = []
    let i=0
    let j=0
    let k=0
    while(i<arr1.length && j<arr2.length && k<arr3.length){
        let min = Math.min(arr1[i] , arr2[j] , arr3[k])
        res.push(min)

        if(min === arr1[i]) i++
        else if(min === arr2[j]) j++
        else k++
    }

    while(i<arr1.length){
        res.push(arr1[i]) 
        i++
    }
    while(j<arr2.length){
        res.push(arr2[j]) 
        j++
    }
    while(k<arr3.length){
        res.push(arr3[k]) 
        k++
    }
    return res
}

let arr11 = [1 ,2, 3, 4] 
let arr21 = [1, 2, 3, 4, 5] 
let arr31 = [1, 2, 3, 4, 5, 6,]

console.log(merge(arr11,arr21,arr31));

// function mergeSortedArrays(arr1, arr2, arr3) {
//     const mergedArray = [];
//     let i = 0, j = 0, k = 0;
  
//     while (i < arr1.length && j < arr2.length && k < arr3.length) {
//       const min = Math.min(arr1[i], arr2[j], arr3[k]);
//       mergedArray.push(min);
  
//       if (min === arr1[i]) {
//         i++;
//       } else if (min === arr2[j]) {
//         j++;
//       } else {
//         k++;
//       }
//     }
  
//     // Handle any remaining elements in the arrays
//     while (i < arr1.length) {
//       mergedArray.push(arr1[i]);
//       i++;
//     }
  
//     while (j < arr2.length) {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
  
//     while (k < arr3.length) {
//       mergedArray.push(arr3[k]);
//       k++;
//     }
  
//     return mergedArray;
//   }
  
//   const arr1 = [1, 4, 7];
//   const arr2 = [2, 5, 8];
//   const arr3 = [3, 6, 9];
  
//   const mergedArray = mergeSortedArrays(arr1, arr2, arr3);
//   console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  