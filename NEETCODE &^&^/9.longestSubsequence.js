// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

const { addListener } = require("nodemon")

// You must write an algorithm that runs in O(n) time.


function helper(arr,element){
    let n = arr.length 
    for(let i=0; i<n; i++){
        if(arr[i] === element) return true
    }
    return false
}

function brute(arr,n){
    if(n === 0) return 0 

    let longestLength = 0 

    for(let i=0; i<n; i++){
        let element = arr[i] +1
        let currentLength = 1 

        while(helper(arr,element)){
            currentLength += 1 
            element += 1
        }
        longestLength = Math.max(longestLength , currentLength)
    }
    return longestLength
}



// better approach
function better(arr,n){
    if(n===0) return 0 

    arr.sort((a,b)=>a-b)

    let longestLength = 0 
    let currentLength = 1
    
    for(let i=1; i<n; i++){
        if(arr[i-1] === arr[i]) continue 

        if(arr[i-1] === arr[i]-1){
            currentLength += 1
            longestLength = Math.max(longestLength , currentLength)
        }else{
            currentLength = 1
        }
    }
    return longestLength
}

// optimal approach 

function optimal(arr,n){

    if(n===0) return 0 

    let longestLength = 0
    let set = new Set()

    for(let i=0; i<n; i++){
        set.add(arr[i])
    }

    for(const element of set){
        if(!set.has(element-1)){
            let x = element 
            let count = 1 

            while(set.has(x+1)){
                x = x+1
                count += 1
            }

            longestLength = Math.max(longestLength , count)
        }
    }
    return longestLength
}




function main(){
    let arr = [100, 4,200,1,3]
    let n = arr.length 

    let result = optimal(arr,n)
    console.log(result);
}
main()