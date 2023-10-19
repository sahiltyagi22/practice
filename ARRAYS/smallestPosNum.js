// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.


function find(arr,n){
    let store = new Array(n+1).fill(0)

   for(let i=0; i<n; i++){
    if(arr[i]<= 0) continue

    
    
    store[arr[i]]++
   }

   console.log(store);
   
   for(let i=1; i<n; i++){
    if(store[i]=== 0) return i
   }
}

// let arr = [1,2,3,2,2,-1,-2,-3]
// let n  = arr.length

// console.log(find(arr,n));


function better(arr, n) {
    arr.sort((a, b) => a - b);

    let missing = 1; // Initialize the missing value to 1

    for (let i = 0; i <=n; i++) {
        if (arr[i] <= 0) continue;

        if (arr[i] == arr[i-1])  continue

        if(arr[i]!== missing) return missing
        
        missing++;
    }

    return missing; // If all positive integers are present, return the next positive integer
}

let arr = [1, 2, 3, 2, 2, -1, -2, -3];
let n = arr.length;

console.log(better(arr, n));
