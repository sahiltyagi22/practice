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