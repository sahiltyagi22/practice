// convert a given min heap to max heap 

function minToMax(arr,n){
    for(let i=Math.floor(n/2); i>=0; i--){
        maxHeapify(arr,i,n)
    }
}


function maxHeapify(arr,i,n){
    let leftChild = 2*i+1
    let rightChild = 2*i+2
    let largest = i 

    if(leftChild < n && arr[leftChild]> arr[largest]){
        largest = leftChild
    }

    if(rightChild < n && arr[rightChild]> arr[largest]){
        largest = rightChild
    }

    if(largest !==i){
        [arr[i] , arr[largest]] = [arr[largest] , arr[i]]
        maxHeapify(arr,largest,n)
    }
}

function main(){
    let arr = [3, 5, 8, 10, 12, 15]
    let n = arr.length

     minToMax(arr,n)
     console.log(arr);
    
}

main()