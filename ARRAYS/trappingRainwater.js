// Given an array arr[] of N non-negative integers representing the height of blocks.
// If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
 
// Naive solution  O(n*n) 

function naive(arr ,n){
    if(n<=1) return 0 

    let totalWater = 0 

    for(let i=1; i<n-1; i++){

        let leftMaXheight = arr[i]
        for(let j=0; j<i; j++){
            leftMaXheight =Math.max(leftMaXheight , arr[j])
        }

        let rightMaxHeight = arr[i]
        for(let j=i+1; j<n; j++){
            rightMaxHeight = Math.max(rightMaxHeight , arr[j])
        }


        totalWater += Math.min(leftMaXheight , rightMaxHeight) - arr[i]
    }
    return totalWater
}


// better approach 

function better(arr,n){
    if(n<=2) return 0 

    let totalWater = 0

    let leftMaXheight = new Array(n)
    let rightMaxHeight = new Array(n)


    leftMaXheight[0] = arr[0]
    for(let i=1; i<n; i++){
        leftMaXheight[i] = Math.max(arr[i] , leftMaXheight[i-1])
    }

    rightMaxHeight[n-1] = arr[n-1]
    for(let i=n-2; i>=0; i--){
        rightMaxHeight[i] = Math.max(arr[i] , rightMaxHeight[i+1])
    }

    
    for(let i=1; i<n-1; i++){
        totalWater += Math.min(leftMaXheight[i] , rightMaxHeight[i]) - arr[i]
        console.log(totalWater);
    }

    console.log(leftMaXheight);
    console.log(rightMaxHeight)
    return totalWater

}



function main(){
    let arr = [8, 8, 2, 4, 5, 5, 1]
    let n = arr.length

    let result = better(arr,n)
    console.log(result);
}

main()