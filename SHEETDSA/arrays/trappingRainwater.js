// Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, 
// compute how much water it is able to trap after raining.

function brute(arr , n){
    if(n<=1) return 

    let res = 0

    for(let i=1; i<n-1; i++){

        let leftMax = arr[i]
        for(let j =0; j<i; j++){
            leftMax = Math.max(arr[j] , leftMax)
        }

        let rightMax = arr[i]

        for(let k=i; k<n; k++){
            rightMax = Math.max(arr[k] , rightMax)
        }

        res+= Math.min(leftMax , rightMax) - arr[i]
    }

    return res
}

// let arr = [0, 1, 0, 2, 1, 0,  1, 3, 2, 1, 2, 1]
// let n = arr.length

// let result = brute(arr,n)
// console.log(result);


//  better approach (using precalculation of left max and right max)


function better(arr,n){
    if(n<=1) return

    let leftArray = new Array(n)
    let rightArray = new Array(n)

    leftArray[0] = arr[0]

    for(let i=1; i<n; i++){
        leftArray[i] = Math.max(leftArray[i-1] , arr[i])
    }

    rightArray[n-1] = arr[n-1]
    for(let i=n-2; i>=0; i--){
        rightArray[i] = Math.max(rightArray[i+1] , arr[i])
    }

   
    let water = 0

    for(let i=0; i<n; i++){
        water += Math.min(leftArray[i] , rightArray[i]) - arr[i]
    }

    return water
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
let n = arr.length

let result = better(arr,n)
console.log(result);