// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// brute approach 

function brute(arr,n){
    if(n <=2 ) return 0 

    let maxWaterStored = 0 

    for(let i=1 ; i<n; i++){

        let leftMax= 0
        for(let j=i-1; j>=0;j--){
           leftMax = Math.max(leftMax , arr[j])
        }

       
        let rightMax = 0
        for(let j=i+1; j<n; j++){
            rightMax = Math.max(rightMax , arr[j])
        }
        

        let water = Math.min(leftMax , rightMax) - arr[i]
        
        if(water > 0){
            maxWaterStored += water
        }

        

    }

    return maxWaterStored
}


// better in O(n)
function better(arr,n){
    if(n <=2 ) return 0 

    let maxWaterStored = 0 

    let leftMax = new Array(n)
    let rightMax = new Array(n)

    leftMax[0] = 0
    rightMax[n-1] = 0 

    for(let i=1; i<n; i++){
        leftMax[i] = Math.max(leftMax[i-1] , arr[i-1])
    }

    for(let i=n-2; i>=0; i--){
        rightMax[i] = Math.max(rightMax[i+1] , arr[i+1])
    }

   
    for(let i=0; i<n; i++){
        let water = Math.min(leftMax[i], rightMax[i]) - arr[i]

        if(water > 0){
            maxWaterStored += water
        }
    }

    return maxWaterStored
}

function main(){
    let arr = [4,2,0,3,2,5]
    let n = arr.length 

   let result = better(arr,n)
   console.log(result);
}
main()