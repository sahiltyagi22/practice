// Given an array arr[] of size N and an integer K. Find the maximum for each and every contiguous subarray of size K.



// brute approach 

function brute(arr,n,k){
    if(n===0) return []

    if(k===n) return Math.max([...arr])

    let maxElements = []

    for(let i=0; i<n-k+1; i++){
        let max = arr[i]
        for(let j=i+1; j<=i+k-1; j++){
            if(arr[j] > max){
                max = arr[j]
            }
        }
        maxElements.push(max)
    }

    return maxElements
}


// better approach 

function better(arr,n,k){
    if (n === 0 || n < k) return []; 

        if (k === n) return [Math.max(...arr)]; 

        let maxElements = [];

        let prevMax = -1 
        let prevMaxIndex = -1 

        for(let i=0; i<k; i++){
            if(arr[i] > prevMax){
                prevMax = arr[i]
                prevMaxIndex =i
            }
        }

        maxElements.push(prevMax)
        
        let i=1 
        let j=i+k-1 

        while(j<n){
            if(arr[j] > prevMax ){
                maxElements.push(arr[j])
                prevMaxIndex = j
                j++
                i++
            }else{
                maxElements.push(prevMax)
                i++
                j++
            }
            
        }

        return maxElements
}

function main(){
    let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
    let n = arr.length 
    let k = 3

    let result = better(arr,n,k)
    console.log(result);
}
main()