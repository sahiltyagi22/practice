// Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

function brute(arr){
    const n = arr.length
    arr.sort((a,b) => a[0] - b[0])

    let ans  = []

    for(let i =0; i<n; i++){
        let start = arr[i][0]
        let end = arr[i][1]

        if(ans.length && ans <= ans[ans.length-1][1]){
            continue
        }

        for( let j = i+1; j<n; j++){
            if(arr[j][0] <= end){
                end = Math.max(end , arr[j][1])
            }else{
                break
            }
        }

        ans.push([start , end])
    }
    return ans
}

// const arr1 = [[1, 3], [8, 10], [2, 6], [15, 18]];


// console.log(brute(arr1));




/**
 * Optimal approach
 */

function optimal(arr){
    let n = arr.length
    arr.sort((a,b) => a[0] - b[0])

    let ans = [arr[0]]

    for(let i=1; i<n; i++){
        let last = ans[ans.length-1]
        let curr = arr[i]

        if(curr[0] <= last[1]){
            last[1] = Math.max(last[1] , curr[1])
        }else{
            ans.push(curr)
        }
    }
    return ans
}
 
  
  
const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
console.log(optimal(arr));