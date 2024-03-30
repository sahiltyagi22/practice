// Given an array and a range [lowVal, highVal], partition the array around the range such that array is divided in three parts. 

// All elements smaller than lowVal come first. 
// All elements in range lowVal to highVal come next. 
// All elements greater than highVal appear in the end.


function brute(arr,n,low,high){
    if(n<=1) return arr

    let lowArray = []
    let mid = []
    let highArray = []

    for(let i=0; i<n; i++){
        if(arr[i] <low){
            lowArray.push(arr[i])
        }else if(arr[i]>low && arr[i]<high){
            mid.push(arr[i])
        }else{
            highArray.push(arr[i])
        }
    }

    let result = lowArray.concat(mid)

    return result.concat(highArray)
}

// let arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32]
// let n = arr.length
// let low=14
// let high =20

// let result = brute(arr,n,low,high)
// console.log(result);


function better(arr , n , low, high){
    if(n<=1) return arr

    let i=0;
    let start = 0
    let end = n-1

    while(i<=end){
        if(arr[i] < low){
            let temp = arr[start]
            arr[start] = arr[i]
            arr[i] = temp

            start++
            i++
        }else if(arr[i] > high){
            let temp = arr[end]
            arr[end] = arr[i]
            arr[i] = temp
            end--
        }else{
            i++
        }
    }

    return arr
}

let arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32]
let n = arr.length
let low=14
let high =20

let result = better(arr,n,low,high)
console.log(result);
