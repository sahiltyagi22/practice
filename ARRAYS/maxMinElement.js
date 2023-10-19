function maxMinElement(arr,n){
    let max = arr[0]
    let min = arr[0]

    for(let i=0; i<n; i++){
        if(arr[i]>max){
            max = arr[i]
        }else if(arr[i]<min){
            min = arr[i]
        }
    }

    return [max , min]
}

// let arr = [5,4,0,19,33,4]
// let n = arr.length

// console.log(maxMinElement(arr,n));


/**
 * USING PAIRS
 */


function maxMinElement(arr, n){
    
    let max , min , i;

    if(n%2 ==0){
        max = Math.max(arr[0] , arr[1])
        min = Math.min(arr[0] , arr[1])

        i = 2
    }else{
        max =min = arr[0]
        i=1
    }

    while(i<n-1){
        if(arr[i]<arr[i+1]){
            max = Math.max(max , arr[i+1])
            min = Math.min(min , arr[i])
        }else{
            max = Math.max(max , arr[i])
            min = Math.min(min , arr[i+1])
        }

        i +=2
    }

    return [min , max]
    
}

let arr = [5,4,0,19,33,4,7]
let n = arr.length

console.log(maxMinElement(arr,n));