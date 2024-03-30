
// BETTER APPROACH
function reverseArray(arr,n){
    if(n===0 || n===1) return arr

    let resultArray = []

    for(let i=n-1; i>=0; i--){
        resultArray.push(arr[i])
    }

    return resultArray
}

let arr1 = [1,2,3,4,5]
let n = arr1.length

let result = reverseArray(arr1 , n)

console.log(result);






// OPTIMAL APPROACH
function reverse(arr, low,high){
    if(arr.length<=1){
        return arr
    }
        while(low<high){
            [arr[low] , arr[high]] = [arr[high] , arr[low]]

            low++
            high--
        }
    
return arr

}

let arr = [1,2,3,4,5]
let low = 0
let high = arr.length-1

console.log(reverse(arr,low,high));