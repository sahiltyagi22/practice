// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.

// Example 1:

// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
 

function brute(arr,n,k){
    if(n===0) return 0 

    let subArrays = 0 

    for(let i=0; i<n; i++){
        let count = 0 
        for(let j=i; j<n; j++){
            if(arr[j] %2 !==0){
                count++
            }

            if(count === k){
                subArrays++
            }if(count > k){
                break
            }
        }
    }

    return subArrays
}

function main(){
    let arr = [2,2,2,1,2,2,1,2,2,2]
    let n = arr.length 
    let k =2

    let result = brute(arr,n,k)
    console.log(result);
}
main()