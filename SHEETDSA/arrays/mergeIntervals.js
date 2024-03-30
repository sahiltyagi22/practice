// Given a set of time intervals in any order,
//  our task is to merge all overlapping intervals into one and output the result which should have only mutually exclusive intervals.


function merge(arr,n){
    if(n<=1) return arr

    arr.sort((a,b)=>a-b)

    let result = []

    let start = 0
    let end = 1

    for(let i=1; i<n; i++){
        if(arr[i][start] < arr[i-1][end]){
            result.push([ arr[i-1][start],arr[i][end]])
        }else{
        result.push(arr[i])
        }
    }

    return result
}

let arr = [[1,3],[2,4],[6,8], [9,10]]
let n = arr.length

let output = merge(arr,n)
console.log(output);