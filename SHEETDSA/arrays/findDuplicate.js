// Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times.
//  Find these repeating numbers in O(n) and use only constant memory space.

// BRUTE FORCE O(n*n)
// USING NESTED FOR LOOPS AND CHECK FOR EACH ELEMENT AND IF YES THEN PUSH IT TO THE RESULT ARRAY


// BETTER APPROACH O(N) + O(N) SPACE

// OPTIMAL APPROACH 

function duplicate(arr,n){
    if(n===0 || n===1) return 0
    let duplicateElements = []

    arr.sort((a,b)=>a-b)

    for(let i=0; i<n; i++){
        if(arr[i] === arr[i+1]){
            duplicateElements.push(arr[i])
        }
    }

    return duplicateElements
}

let arr = [1, 2, 3, 6, 3, 6, 1]
let n  = arr.length

let result = duplicate(arr,n)
console.log(result);