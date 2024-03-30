// You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.
// Return the sum of all subarray ranges of nums.

// A subarray is a contiguous non-empty sequence of elements within an array.

// brute approach 

function brute(arr,n){
    if(n<=1) return 0 
    
    let sum = 0

    for(let i=0; i<n; i++){
        let maxInSubArray = arr[i];
        let minInSubArray = arr[i];

        for(let j=i; j<n; j++){

            let max = Math.max(maxInSubArray , arr[j])
            let min = Math.min(minInSubArray, arr[j])

            sum += max-min
        }
    }

    return sum
}

function optimized(arr, n) {
    let sum = 0;
    let stack = [];
    
    for (let i = 0; i <= n; i++) {
        while (stack.length > 0 && (i === n || arr[i] < arr[stack[stack.length - 1]])) {
            let top = stack.pop();
            let width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
            sum += width * arr[top];
        }
        stack.push(i);
    }
    
    return sum;
}




function main(){
    let arr = [1,2,3]
    let n = arr.length 

    let result = optimized(arr,n)
    console.log(result);
}
main()

 