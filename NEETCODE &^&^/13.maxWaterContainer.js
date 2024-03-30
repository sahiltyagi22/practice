// You are given an integer array height of length n.
//  There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// brute approach O(n*n) 

function brute(arr,n){
    if(n<=1) return 0 

    let maxWater = 0 

    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            let currentWater = Math.min(arr[i] , arr[j]) * (j-i)

            maxWater = Math.max(maxWater , currentWater)
        }
    }
    return maxWater
}


// using O(n) space 

function better(arr,n){
    if(n<=1) return 0 

    let maxWater = 0 

    let left = 0
    let right = n-1 

    while(left<right){
        let minHeight = Math.min(arr[left] , arr[right])
        
        let currentWaterater = minHeight * (right-left)

        maxWater = Math.max(maxWater , currentWaterater)

        if(arr[left] === minHeight){
            left++
        }else{
            right--
        }
    }
return maxWater
}

function main(){
    let arr = [1,8,6,2,5,4,8,3,7]
    let n = arr.length 

    let result = better(arr,n)
    console.log(result);
}
main()