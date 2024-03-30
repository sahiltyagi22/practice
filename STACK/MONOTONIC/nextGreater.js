// finding the next greater element of each element in an arr
//  ex = [1,2,3] => [2,3,-1]


// brute force approach 

function brute(arr,n){
    if(n===0) return null 

    let resultArr = []
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < i + n; j++) {
            if (arr[j % n] > arr[i]) {
                resultArr[i] = arr[j % n];
                break; // Found the next greater element, move to the next index
            } else if (j === i + n - 1) {
                resultArr[i] = -1; // No greater element found
            }
        }
    }

    return resultArr
}


function nextGreater(arr, n) {
    if (n <= 1) return [-1];

    let stack = [];
    let resultArr = [];

    // to traverse the arr twice as it has to be traversed in a clockwise manner 
    let k = 2 * n;

    for (let i = k - 1; i >= 0; i--) {
        while (stack.length !== 0 && stack[stack.length - 1] <= arr[i % n]) {
            stack.pop();
        }

        if (stack.length === 0) {
            resultArr[i % n] = -1;
        } else {
            resultArr[i % n] = stack[stack.length - 1];
        }

        stack.push(arr[i % n]);
    }
    return resultArr; 
}


function main(){
    let arr = [5,7,1,2,6,0]
    let n = arr.length 

    let result = nextGreater(arr,n)
    console.log(result);
}

main()