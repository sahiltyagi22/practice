// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

function brute(arr,n,k){
    if(n===0) return -1 

    for(let i=0; i<n; i++){
        if((arr[i]-k < 0)){
            arr[i] = arr[i]+k
        }else{
            arr[i] = arr[i]-k
        }
    }

    let min = Math.min(...arr)
    let max = Math.max(...arr)
    
    return max-min
}

function main(){
    let arr = [7,7,3,5]
    let n = arr.length 
    let k=1

    let result = brute(arr,n,k)
    console.log(result);
}
main()