// Area of largest rectangle in Histogram
// Problem Statement: Given an array of integers heights representing the histogram’s bar height where the width of each bar is 1  
// return the area of the largest rectangle in histogram.


function brute(arr,n){
    if(n<=1) return arr 

    let maxHeight = 0 

    for(let i=0; i<n; i++){
        let min  = arr[i]

        for(j=i; j<n; j++){
            if(arr[j]<min){
                min = arr[j]
            }

            let currentHeight = min * (j-i+1)

            maxHeight = Math.max(maxHeight , currentHeight)
        }
    }
    return maxHeight
}

function main(){
    let arr = [2,8]
    let n = arr.length 

    let result = brute(arr,n)
    console.log(result);
}
main()