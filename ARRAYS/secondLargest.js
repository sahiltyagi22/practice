/**
 * BRUTE FORCE APPROACH 
 */

// function secondLargest(arr , n){
//     let element  = Math.max(...arr)

//     arr = arr.sort((function(a,b){return b-a}))
    
//     for(let i =0; i<n; i++){
//         if(arr[i]<element){
//             return arr[i]
//             break;
//         }
//     }
// }

// let arr = [3,2,1,4,5]
// let n = arr.length
// console.log(secondLargest(arr, n));


/**
 * BETTER SOLUTION
 */



// function secondLargest(arr, n){
//     let largest = 0
//     let second = -1

//     for(let i=0; i<n; i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }

//     for(let i=0; i<n; i++){
//         if(arr[i]>second && arr[i]<largest){
//             second = arr[i]
//         }
//     }

//     return second
// }

// let arr = [2,4,1,5,6]
// let n = arr.length

// console.log(secondLargest(arr,n));


/**
 * OPTIMAL APPROACH
 */

function secondLargest(arr, n){
    let largest = arr[0]
    let second = -1

    for(let i=1; i<n; i++){
        if(arr[i]>largest){
            second = largest
            largest = arr[i]
        }else if(arr[i]<largest && arr[i] > second){
            second = arr[i]
        }
    }

    return second
}

let arr = [0,2,44,1,66,66,3,2,1]
let n = arr.length

console.log(secondLargest(arr,n));