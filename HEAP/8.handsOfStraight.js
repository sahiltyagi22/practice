// Alice has some cards, each card has one number written on it. 
// She wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
// Given an integer array hand of size N where hand [ i ] is the value written on the ith card and an integer groupSize,
//  return true if she can rearrange the cards, or false otherwise.


class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insertElement(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0); // Pass the index of the root node
        return min;
    }

    heapifyDown(index) {
        let leftChild = this.getLeftChildIndex(index);
        let rightChild = this.getRightChildIndex(index);

        let smallest = index;

        if (
            leftChild < this.heap.length &&
            this.heap[leftChild] < this.heap[smallest]
        ) {
            smallest = leftChild;
        }

        if (
            rightChild < this.heap.length &&
            this.heap[rightChild] < this.heap[smallest]
        ) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
}

function hands(arr, n, groupSize) {
    if (n === 0) return false;
    if (n % groupSize !== 0) return false;

    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let heap = new MinHeap();

    for (let i = 0; i < n; i++) {
        heap.insertElement(arr[i]);
    }

    while (heap.heap.length > 0) { // Accessing heap length properly
        let minElement = heap.extractMin();
        console.log(minElement);

        let elementFrequency = map.get(minElement);
        if (!elementFrequency) return false;

        map.set(minElement, map.get(minElement) - 1);

        if (elementFrequency === 1) {
            map.delete(minElement);
        }

        for (let i = 1; i < groupSize; i++) {
            const nextCard = minElement + i;
            if (!map.has(nextCard)) {
                return false;
            }

            const nextCardFrequency = map.get(nextCard);
            map.set(nextCard, nextCardFrequency - 1);

            if (nextCardFrequency === 1) {
                map.delete(nextCard);
            }
        }
    }
    return true;
}

function main() {
    let arr = [1,2,3,6,2,3,4,7,8];
    let n = arr.length;
    let k = 3;

    let result = hands(arr, n, k);
    console.log(result);
}
main();
