// You are given an array of N+2 integer elements. All elements of the array are in the range 1 to N. 
// Also, all elements occur once except two numbers which occur twice. Find the two repeating numbers.

// Note: Return the numbers in their order of appearing twice. 
// So, if X and Y are the repeating numbers, and X repeats twice before Y repeating twice, then the order should be (X, Y).


// Brute approach(it will give a solution in which the relative order of elements is not persisted)

function naive(arr,n){
    if(n<=1) return -1 

    arr = arr.sort((a,b)=>a-b)
    let result = []

    for(let i=0; i<n; i++){
        if(arr[i] === arr[i+1]){
            result.push(arr[i])
        }
    }
return result
}




// better approach (this approach will persist the relative order of elements)

function better(arr,n){
    if(n<=1) return -1 

    let set = new Set()
    let resultArr = []

    for(let i=0; i<n; i++){
        if(set.has(arr[i])){
            resultArr.push(arr[i])
        }else{
            set.add(arr[i])
        }
    }

    return resultArr
}


function main(){
    let arr = [1,2,1,3,4,3]
    let n = arr.length 

    let result = better(arr,n)
    console.log(result);
}

main()
