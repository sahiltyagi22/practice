
// Given an integer array representing the heights of N buildings, 
// the task is to delete N-2 buildings such that the water that can be trapped between the remaining two building is maximum.
// Note: The total water trapped between two buildings is gap between them (number of buildings removed)
//  multiplied by height of the smaller building.

// brute force O(n*n)

// we can use two nested loops and check for each pair that can give max water.


// optimal approach O(n)
// we will use two pointer approch

function maximumWater(arr,n){
    if(n<=2) return 0

    let i=0
    let j=n-1
    
    let maxWater = 0

    while(i<j){
        let water = Math.min(arr[i] , arr[j]) * (j-i-1)
        maxWater = Math.max(maxWater , water)
        
        if(arr[i] > arr[j]){
            j--
        }else{
            i++
        }
    }

    return maxWater
}

function main(){
    let arr = [2,1,3,4,6,5]
    let n = arr.length 

    let result = maximumWater(arr,n)
    console.log(result);
}

main()
