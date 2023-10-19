function prefix(arr,n){
    let result = new Array()

let sum = arr[1]
result.push(arr[1])
    let low = 2
    let high = n-2
    
    while(low<high){
        sum = sum+arr[low]
        result.push(sum)
        low++
    }
return result
}

let arr = [1,2,3,4,5,6]
let n = arr.length

console.log(prefix(arr,n));