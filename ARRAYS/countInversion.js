//  For an array, inversion count indicates how far (or close) the array is from being sorted.
//  If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum. 

// function inversion(arr,n){
//     let count = 0
//     for(let i=0; i<n-1; i++){
//         for(let j=i+1; j<n; j++){
//             if(arr[j] < arr[i]){
//                 count++
//             }
//         }
//     }
//     return count
// }
// let arr = [10, 10, 10]
// let n = arr.length

// console.log(inversion(arr,n));


function inversion(arr,n){

    let count = 0
    if(n===0 || n===1) return count

    for(let i=0; i<n; i++){
        let point = i+1

        while(point < n){
            if(arr[i] > arr[point]){
                count++
                point++
            }else{
                point++
            }
        }
    }
    return count
}

let arr  = [2,1,4,5,0]
let n  = arr.length

console.log(inversion(arr,n));
