function merge(arr, low, mid, high) {
    const temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i-low];
    }

    return arr
}

function mergeSort(arr, low, high) {
    if (low >= high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    return merge(arr, low, mid, high);
    
}

const arr = [9, 4, 7, 6, 3, 1, 5];
const n = arr.length;



console.log(mergeSort(arr, 0, n - 1));


