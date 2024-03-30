// Given an array of N integers where each value represents the number of chocolates in a packet. 
// Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that: 

// Each student gets one packet.
// The difference between the number of chocolates in the packet with maximum chocolates and the packet with minimum chocolates given to the students is minimum.


// Brute force (using nested loops)

function brute(arr,n,m){
    if(n<m) return -1

    let minDiff  = Number.MAX_SAFE_INTEGER

    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1; k<n; k++){
                let diff = Math.max(arr[i] , arr[j] , arr[k]) - Math.min(arr[i] , arr[j] , arr[k])

                if(diff < minDiff){
                    minDiff = diff
                }
            }
        }
    }

    return minDiff
}

// let arr = [12, 4, 7,3]
// let n = arr.length
// let m=3

// let result = brute(arr,n,m)
// console.log(result);



//  better approach

function better(arr,n,m){
    if(n<m) return -1

    arr.sort((a,b)=>a-b)

    let minDiff = Number.MAX_SAFE_INTEGER

    for(let i=0; i<=n-m; i++){
        let diff = arr[i+m-1] - arr[i]

        if(diff<minDiff){
            minDiff = diff
        }
    }
    return minDiff
}

let arr = [12, 4, 7,3]
let n = arr.length
let m=3

let result = better(arr,n,m)
console.log(result);