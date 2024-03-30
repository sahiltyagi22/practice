// Given two arrays: arr1[0..m-1] and arr2[0..n-1]. Find whether arr2[] is a subset of arr1[] or not.
//  Both arrays are not in sorted order. It may be assumed that elements in both arrays are distinct.


function check(arr , x){
    let n = arr.length

    for(let i=0; i<n; i++){
        if(arr[i] === x){
            return true
        }
    }
   return false
}


function brute(arr1 , arr2 , n,m){

    for(let i = 0; i<m; i++){
        if(!check(arr1 , arr2[i])){
            return false
        }
    }
    return true
    
}


let arr1 = [11, 1, 13, 21, 3, 7]
let arr2  = [11, 3, 7, 1]

let n = arr1.length
let m = arr2.length

let result = (brute(arr1 ,arr2 , n,m))
console.log(result);


//  Better Approach using hashing 