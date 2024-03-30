// Given an array of N integers and Q queries,
// print the number of next greater elements to the right of the given index element. 


// BRUTE FORCE (O(N*queries))
function NGEright(arr,n, index1 , index2){
    if(n<=1) return 0

    
    let count1 = 0
    let count2 =0

    for(let i= index1+1; i<n; i++){
        if(arr[i] > arr[index1]){
            count1++
        }
    }

    for(let i= index2+1; i<n; i++){
        if(arr[i] > arr[index2]){
            count2++
        }
    }

    return [count1 , count2]
}

function main(){
    let arr  = [3, 4, 2, 7, 5, 8, 10, 6]
    let n = arr.length

    let index1 = 0,  index2 = 5

    let result = NGEright(arr,n,index1, index2)
    console.log(result);
}

main()


// optimize code O(n+queries)

function better(arr ,n){
    if(n===0) return [-1 ]

    

}
