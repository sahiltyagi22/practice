// Given an unsorted array of size n. Array elements are in the range of 1 to n. 
// One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

function brute(arr){
    let n = arr.length 

    arr.sort((a,b)=>a-b)

    let missing = -1
    let repeat = -1

    for(let i=1; i<n; i++){
        if(arr[i]!==i){
            missing = i
        }
        if(arr[i]===arr[i+1]){
            repeat = arr[i] 
        }
    }

    return [missing , repeat]
}



// better time complexity of O(n)

function beter(arr){
    let n = arr.length
    let temp = new Array(n).fill(0)

    let missing = -1
    let repeat = -1

    for(let i=0; i<n; i++){
        temp[arr[i]-1]++
        if(temp[arr[i]-1]>1){
            repeat =i+1
        }
    }

    for(let i=0; i<n; i++){
        if(temp[i]===0) missing = i+1
    }

    return [repeat , missing]
}





function main(){
    let arr = [3,1,3]
    let result = beter(arr)

    console.log(result);

}

main()