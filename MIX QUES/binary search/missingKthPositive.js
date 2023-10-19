// You are given a strictly increasing array ‘vec’ and a positive integer ‘k’. 4
// Find the ‘kth’ positive integer missing from ‘vec’.


function brute(arr,n,k){
    for(let i=0; i<n; i++){
        if(arr[i] <=k) k++
    else
        break
    }

    return k
}

// let arr = [1,2,3,6,8]
// let n = arr.length
// let k= 3

// console.log(brute(arr ,n ,k));

/**
 * Optimal ==> binary
 */

function binary(arr,k){
    let n = arr.length

    let low= 0
    let high = n-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let missing = arr[mid] - (mid+1)

        if(missing < k){
            low = mid+1
        }else{
            high = mid-1
        }
    }

    return high+1+k
}

let arr = [1,2,3,6,8]
let k= 3

console.log(binary(arr  ,k));