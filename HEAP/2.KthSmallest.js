// find kth smallest element in an array 

function kthSmallest(arr,n,k){

    if(k>n)return -1

    buildMinHeap(arr)

    let element = -1

    for(let i=0; i<k; i++){
         element = arr[0]
        arr[0] = arr[arr.length-1]
        arr.length -= 1 

        minHeapify(arr,0,n)
    }
return element
    
}

// 1) building minheap
function buildMinHeap(arr){
    let n = arr.length 

    for(let i=Math.floor(n/2); i>=0; i--){
        minHeapify(arr,i,n)
    }
}

//  2) heapify 
function minHeapify(arr,i,n){
    let leftChild = 2*i+1
    let rightChild = 2*i+2
    let smallest = i 

    if(smallest <n && arr[leftChild] < arr[smallest]){
        smallest = leftChild
    }

    if(smallest <n && arr[rightChild] < arr[smallest]){
        smallest = rightChild
    }

    if(smallest!==i){
        [arr[i] , arr[smallest]] = [arr[smallest] , arr[i]]
        minHeapify(arr,smallest,n)
    }
}

function main(){
    let arr =  [7, 10, 4, 3, 20, 15]
    let n = arr.length
    let k =4

    let result = kthSmallest(arr,n,k)
    console.log(result);

}

main()
