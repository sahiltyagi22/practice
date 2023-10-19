// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. 
// Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.



/**
 * Brute force
 */

// function variety1(arr,n){
//     let positive = []
//     let negative = []

//     for(let i=0; i<n; i++){
//         if(arr[i] > 0){
//             positive.push(arr[i])
//         }else{
//             negative.push(arr[i])
//         }
//     }
//     n = Math.floor(n/2)
//    for(let i =0; i<n; i++){
//     arr[2*i] = positive[i]
//     arr[2*i+1] = negative[i]
//    }
//    return arr
// }

// let arr = [1,-2,3,-4,-5,4]
// let n = arr.length

//  console.log(variety1(arr,n));


/**
 * Optimal Approach 
 */

// function variety1(arr,n){

//     let newArray= []

//     let positiveIndex = 0
//     let negativeIndex = 1

//     for(let i=0; i<n; i++){
//         if(arr[i]>0){
//             newArray[positiveIndex] = arr[i]
//             positiveIndex +=2
//         }else{
//             newArray[negativeIndex] = arr[i]
//             negativeIndex +=2
//         }
//     }

//     return newArray

// }

// let arr = [1,-2,3,-4,-5,4]
// let n = arr.length

//  console.log(variety1(arr,n));





//  There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal).
//   Without altering the relative order of positive and negative elements,
//    you must return an array of alternately positive and negative values. 
//    The leftover elements should be placed at the very end in the same order as in array A.

/**
 * Brute force
 */
function variety2(arr,n){
    
let positive = [];
let negative = []

for(let i=0; i<n; i++){
    if(arr[i] > 0){
        positive.push(arr[i])
    }else{
        negative.push(arr[i])
    }
}

if(positive.length > negative.length){
    for(let i=0; i<negative.length; i++){
        arr[2*i] = positive[i]
        arr[2*i+1] = negative[i]
    }

    let index = negative.length *2

    for(let i = negative.length; i<positive.length; i++){
        arr[index] = positive[i]
        index++
    }
}else{
    for(let i=0; i<positive.length; i++){
        arr[2*i] = positive[i]
        arr[2*i+1] = negative[i]
    }
    let index = positive.length *2

    for(let i = positive.length; i<negative.length; i++){
        arr[index] = negative[i]
        index++
    }
}

console.log(arr);
}


let arr1= [1,-2,-3,11,-44,-45,-46,-47,-48,-49,-50,12,4,-3,5,6,4,7]
let n1 = arr1.length
variety2(arr1, n1)