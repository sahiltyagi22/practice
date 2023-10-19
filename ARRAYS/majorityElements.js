// : Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array.
//  You may consider that such an element always exists in the array.

/**
 * Brute force
 */

// function majorityElement(arr, n) {
//   let index = -1;

//   for(let i=0; i<n;i++){
//     let count = 0
//         for(let j=0; j<n; j++){
//             if(arr[i] ==arr[j]){
//                 count++
//             }
//         }
//         if(count > Math.floor(n/2)){
//             let index =i
//             return arr[i]
//         }
//   }
//   return -1
// }

// let arr = [1, 2, 2,2,3];
// let n = arr.length;

// console.log(majorityElement(arr, n));


/**
 * BETTER APPROACH (USING MAP)
 */


// function majorityElement(arr,n){

//     let map = new Map()
    
//     for(let i=0; i<n; i++){
//         let num = arr[i]

//         if(map.has(num)){
//             map.set(num , map.get(num) +1)
//         }else{
//             map.set(num , 1)
//         }
//     }

//     for(const [num ,count] of map){
//         if(count > Math.floor(n/2)){
//             return num
//         }
//     }
// return -1

// }

// let arr = [1,2,2,2,3,3,3,3,3,];
// let n = arr.length;

// console.log(majorityElement(arr, n));




/**
 * OPTIMAL APPROACH  (Moore's Voting Algo)
 */

function majorityElement(arr,n){

    let count = 0
    let element;

    for(let i=0; i<n; i++){
        if(count == 0){
            count  =1
            element = arr[i]
        }else if(element == arr[i]){
            count++
        }else{
            count--
        }
    }

    let count1 = 0
    for(let i=0; i<n; i++){
        if(arr[i] == element){
            count1++
        }
        if(count1 > Math.floor(n/3)){
            return element
        }
    }
  return -1

}

let arr = [1, 2,3,3];
let n = arr.length;

console.log(majorityElement(arr, n));
