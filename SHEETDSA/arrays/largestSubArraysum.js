//  Find the sum of the largest subarray sum

function ArraySum(arr,n){
    if(n<=1) return arr[0]

    let maxSum = -Infinity

    for(let i=0; i<n; i++){
        let sum=0
        for(let j=i; j<n; j++){
            sum += arr[j]
            maxSum = Math.max(sum , maxSum)
        }
        
    }
return maxSum

}

// let arr = [-2,-3,4,-1,-2,1,5,-3]
// let n = arr.length

// result = ArraySum(arr,n)
// console.log(result);


// kadane algo

function kadane(arr,n){
    if(n<=0) return arr

    let sumSoFar = arr[0]
    let maxSum = arr[0]

    for(let i=1; i<n; i++){
        sumSoFar = Math.max(arr[i] , sumSoFar+arr[i])
        maxSum = Math.max(sumSoFar , maxSum)
    }

    return maxSum
}

let arr = [-2,-3,4,-1,-2,1,5,-3]
let n = arr.length

result = kadane(arr,n)
console.log(result);

