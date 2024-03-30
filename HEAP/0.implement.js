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
    this.heapifyDown(0);
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

let minHeap = new MinHeap();

minHeap.insertElement(10);
minHeap.insertElement(25);
minHeap.insertElement(40);
minHeap.insertElement(3);
minHeap.insertElement(9);
minHeap.insertElement(21);

/*
let result = minHeap.getLeftChildIndex(0)
console.log(minHeap);

let minElement =minHeap.deleteMin()
console.log(minElement);
console.log(minHeap);

*/

// MaxHEAP
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

let heap = new MaxHeap();

heap.insertElement(25);
heap.insertElement(20);
heap.insertElement(18);
heap.insertElement(50);

console.log(heap);

let maxElement = heap.maxElement();
console.log(maxElement);
console.log(heap);

// function createMaxheap(arr){
//     let heap = new maxHeap()
//    for(let i=0; i<arr.length; i++){
//     heap.insertElement(arr[i])
//    }

//    return heap
// }

// function main(){
//     let arr = [32,16,2,8,67,99,4,0]

//     let result = createMaxheap(arr)
//     console.log(result);
// }
// main()
