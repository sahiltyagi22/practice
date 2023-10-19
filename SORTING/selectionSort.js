function selection(arr,n){
    for(let i=0; i<n; i++){
        let minIndex = i
        for(let j=i+1; j<n;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex !==i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr
}

let arr = [3,2,7,8,1,5,4]
let n = arr.length

console.log(selection(arr,n));