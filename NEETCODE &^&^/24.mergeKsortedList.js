// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

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


function brute(arr,n){
    let heap = new MinHeap()

    for (let linkedList of arr) { // Iterate over each linked list (subarray) in lists
        for (let element of linkedList) { // Iterate over each element in the linked list
            heap.insertElement(element);
        }
    }

    let dummy = new Node()
    let current = dummy
    while(heap.heap.length >0){
        let minValue = heap.extractMin()

        current.next = minValue
        current=current.next 
    }

    console.log(heap);
    

}

function main(){
    let arr = [[1,4,5],[1,3,4],[2,6]]
    let n = arr.length 

    let result = brute(arr,n)
    console.log(result);

}

main()