// finding Kth largest element in an array using heap

function kthLargest(arr, n, k) {
    buildMaxHeap(arr, n);

    let element = -1;
    for (let i = 0; i < k; i++) {
        element = arr[0];
        arr[0] = arr[n - 1];
        n--;
        maxHeapify(arr, 0, n);
    }
    return element;
}

// Building maxHeap
function buildMaxHeap(arr, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, n);
    }
}

// MaxHeapify 
function maxHeapify(arr, i, n) {
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let largest = i;

    if (leftChild < n && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }

    if (rightChild < n && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, largest, n);
    }
}

function main() {
    let arr = [3, 2, 1, 5, 6, 4];
    let n = arr.length;
    let k = 2;

    let result = kthLargest(arr, n, k);
    console.log(result);
}

main();
