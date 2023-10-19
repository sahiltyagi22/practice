function bubble(arr,n){
    for(let i=0; i<n; i++){
        let flag = false
        for(let j=0; j<n; j++){
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
                flag = true
            }
        }if(flag == false) break
    }

    return arr
}

let arr = [1,2,3,4,5]
let n = arr.length

console.log(bubble(arr , n));

