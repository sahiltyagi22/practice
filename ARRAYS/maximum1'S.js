//  return the maximun no of consecutive 1's in an array


function maximum1(arr, n){
    let count = 0
    let max =0

    for(let i=0; i<n ; i++){
        if(arr[i] == 1){
            count ++
            max = count
        }else{
            count = 0
        }
    }
    return max
}

let arr = [1,1,0,0,1,1,1,1,0]
let n = arr.length

console.log(maximum1(arr,n));