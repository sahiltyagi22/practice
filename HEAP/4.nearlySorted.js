// nearly 


class MinHeap {
constructor() {
    this.heap = [];
}

size() {
    return this.heap.length;
}

push(value) {
    this.heap.push(value);
    this.bubbleUp(this.size() - 1);
}

pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    
    if (this.size() > 0) {
        this.heap[0] = last;
        this.bubbleDown(0);
    }
    
    return min;
}

bubbleUp(index) {
    while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] <= this.heap[index]) break;
        this.swap(parentIndex, index);
        index = parentIndex;
    }
}

bubbleDown(index) {
    while (true) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let smallest = index;

        if (leftChild < this.size() && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }

        if (rightChild < this.size() && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            this.swap(smallest, index);
            index = smallest;
        } else {
            break;
        }
    }
}

swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
}
}


function nearlySorted(arr, num, K) {
    let ans = [];
    let minh = new MinHeap();
    
    for (let i = 0; i < num; i++) {
        minh.push(arr[i]);
        if (minh.size() > K) {
            ans.push(minh.pop());
        }
    }
    
    while (minh.size() > 0) {
        ans.push(minh.pop());
    }
    
    return ans;
}


function main(){
    let arr = [6,5,3,2,8,10,9]
    let n = arr.length 
    let k = 3

    let result = nearlySorted(arr,n,k)
    console.log(result);
}

main()