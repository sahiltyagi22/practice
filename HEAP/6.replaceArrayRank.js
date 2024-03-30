// replace array by its rank in array


// Example 1:
// Input: 20 15 26 2 98 6
// Output: 4 3 5 1 6 2
// Explanation: When sorted,the array is 2,6,15,20,26,98. So the rank of 2 is 1,rank of 6 is 2,rank of 15 is 3 and so…


// brute force O(n*n)

function brute(arr,n){
    if(n===0) return -1 

    let arrCopy = [...arr]
    arrCopy.sort((a,b)=>a-b)    

    let ans = []

    for(let i=0; i<n; i++){
        let element = arr[i]

        for(let j=0; j<n; j++){
            if(arrCopy[j]===element){
                ans.push(j+1)
            }
        }
    }
    return ans
}





// optimized soluion (using map)

function optimized(arr,n){
    if(n===0) return -1

    let map = new Map()

    let arrCopy = [...arr]

    arrCopy.sort((a,b)=>a-b)

    let res = []

    for(let i=0; i<n; i++){
        map.set(arrCopy[i], i+1)
    }

    for(let i=0; i<n; i++){
      let frequncy =   map.get(arr[i])
      res.push(frequncy)
    }

    return res
}


// optimal solution  using heap


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

function replaceWithRank(arr) {
    const minHeap = new MinHeap();
    const result = new Array(arr.length);

    // Push elements onto the heap along with their indices
    for (let i = 0; i < arr.length; i++) {
        minHeap.insertElement([arr[i], i]);
    }

    // Sort the array to determine ranks
    const sortedArr = [...arr].sort((a, b) => a - b);

    // Assign ranks to elements based on their order in the sorted array
    let currentRank = 1;
    while (minHeap.heap.length > 0) {
        const [, index] = minHeap.extractMin();
        result[index] = currentRank;
        currentRank++;
    }

    return result;
}




function main(){
    let arr = [20, 15, 26, 2, 98, 6]
    let n = arr.length 

    let result = replaceWithRank(arr,n)
    console.log(result);
}
main()