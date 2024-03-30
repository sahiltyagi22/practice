// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


//  Brute approach => using 3 loops  O(N*N*N)

// Better approach => using 2 loops and a set to store the passed elements O(n*n) & O(n)


// optimal approach O(n*n) & O(1)

function optimal(arr,n){
    if(n<=2) return []

    let result = []

    arr.sort((a,b)=>a-b)

    for(let i=0; i<n-2; i++){
        if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
            let left = i+1
            let right = n-1 
    
            while(left < right){
                let sum = arr[i] + arr[left] + arr[right]
    
                if(sum ===0){
                    result.push([arr[i] , arr[left] , arr[right]])
                    left++
                    right--
                }else if(sum > 0){
                    right--
                }else{
                    left++
                }
            }
        }
    }

    return result

}

function main(){
    let arr = [-1,0,1,2,-1,-4]
    let n = arr.length 

    let result = optimal(arr,n)
    console.log(result);
}
main()