// BRUTE FORCE
// concat both arrays ,storing in another arrays and then sort the array


// ANOTHER APPROACH
// using map , ans setting the available element as true and then later traversing the map and storing the values with true value


// using two pointers

function merge(arr1, arr2, n, m) {
    if (n === 0 || m === 0) return;

    let left = n - 1;
    let right = 0;

    while (left >= 0 && right < m) {
        if (arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            left--;
            right++;
        } else {
            break;
        }
    }

    arr1.sort((a,b)=>a-b)
    arr2.sort((a,b)=>a-b)

    return arr1.concat(arr2);
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
let n = arr1.length;
let m = arr2.length;

result = merge(arr1, arr2, n, m);
console.log(result);
