// in this we have an example question by which we can learn sliding window 


function slidingWindow(arr,n,k){
    if(n<=1) return arr 

    let curr= 0
    
    for(let i=0; i<k; i++){
        curr += arr[i]
    }

    let result = curr 

    for(let i=1; i<n-k; i++){
        curr += (arr[k+i-1] - arr[i-1])

        result = Math.max(result , curr)
    }

    return result

}

function main(){
    let arr  = [1,8,30,-5,20,7]
    let n = arr.length
    let k = 3

    let result = slidingWindow(arr,n,k)
    console.log(result);

}
main()