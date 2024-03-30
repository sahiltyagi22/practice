// Given a character array tasks of size N, representing the tasks a CPU needs to do,
// where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time.
// For each unit of time, the CPU could complete either one task or just be idle.
// CPU has a cooldown period for each task. CPU can repeat a task only after atleast K units of time has passed after it did same task last time. 
// It can perform other tasks in that time, can stay idle to wait for repeating that task.

// Return the least number of units of times that the CPU will take to finish all the given tasks.


// we gonna use maxHeap 

class MaxHeap {
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

    insertElement(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    maxElement() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index) {
        let leftChild = this.getLeftChildIndex(index);
        let rightChild = this.getRightChildIndex(index);

        let largest = index;

        if (
            leftChild < this.heap.length &&
            this.heap[leftChild] > this.heap[largest]
        ) {
            largest = leftChild;
        }

        if (
            rightChild < this.heap.length &&
            this.heap[rightChild] > this.heap[largest]
        ) {
            largest = rightChild;
        }

        if (index !== largest) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }
}

function taskSchedule(arr, n, k) {
    if (k === 0) return n;

    let map = new Map();
    let queue = [];
    let time = 0;

    for (let i = 0; i < n; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    const heap = new MaxHeap();

    map.forEach((frequency, element) => {
        heap.insertElement(frequency);
    });

    let element = heap.maxElement();
    time++;
    queue.push([element - 1, time + k]);

    while (heap.length >0 || queue.length>0) {
        let [, nextTime] = queue[0];
        if (nextTime === time) {
            let [queueElement, queueTime] = queue.shift();
            heap.insertElement(queueElement);
        }

        let maxElement = heap.maxElement();
        time++;
        maxElement = maxElement - 1;
        if (maxElement === 0) {
            continue;
        } else {
            queue.push([maxElement, time + k]);
        }
    }

    return time;
}

function main() {
    let arr = ['A', 'A', 'A', 'B', 'B', 'B'];
    let n = arr.length;
    let k = 2;

    let result = taskSchedule(arr, n, k);
    console.log(result);
}

main();
