// Given an array arr[] of N elements. The task is to check if the array is PalinArray or not 
// i.e., if all elements of array are palindrome or not. 


function helper(element) {
    let n = element.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (element[left] !== element[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}

function brute(arr, n) {
    if (n < 1) {
        return true; // Or return false, depending on your requirements
    }

    for (let i = 0; i < n; i++) {
        if (!helper(String(arr[i]))) {
            return false;
        }
    }
    return true;
}
let arr = [111 , 222,145]
let n = arr.length

let result = brute(arr ,n)
console.log((result));

