// merge k sorted linked list 


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

    isEmpty() {
        return this.heap.length === 0;
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
  

function mergeKlist(arr,k){
    let heap = new MinHeap()

    for(const list of arr){
        for(let i=0; i<list.length; i++){
            heap.insertElement(list[i])
        }
    }

    const result = []

    while(!heap.isEmpty()){
       result.push(heap.extractMin())
    }


    return result
}

function main(){
    let arr = [[1,2,3],[4, 5],[5, 6],[7,8]]
    k = arr.length 

    let result =  mergeKlist(arr,k)
    console.log(result);
}

main()