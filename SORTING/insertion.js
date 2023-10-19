function insertion(arr,n){
    for(let i=1; i<n; i++){
        let key = arr[i]
        let j = i-1

        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = key
    }

    return arr
}


let arr = [1,4,5,2,7,8]
let n = arr.length

console.log(insertion(arr,n));