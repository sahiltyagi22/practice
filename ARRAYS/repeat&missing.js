// You are given a read-only array of N integers with values also in the range [1, N] both inclusive. 
// Each integer appears exactly once except A which appears twice and B which is missing. 
// The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

function brute(arr,n){
    let repeating =-1
    let missing = -1

    for(let i=1; i<=n; i++){
        let count =0
        for(let j=0; j<n; j++){
            if(arr[j] == i)  count++
        }
        if(count == 2 ) repeating = i
        else if(count == 0) missing =i

        if(repeating !==-1 && missing !== -1 ) break
    }

    return [repeating , missing]
}

// let arr = [3,1,2,5,3]
// let n = arr.length

// console.log(brute(arr,n));


/**
 * better approach   using hash array
 */

function better(arr , n){
    let hashArray = Array.from({length : n}, ()=> 0)

    for(let i=0; i<n; i++){
        hashArray[arr[i]]++
    }
   
    let repeating =-1
    let missing =-1

    for(let i=0; i<n; i++){
        if(hashArray[i] >= 2){
            repeating = i
        }else if(hashArray[i] ==0){
            missing =i
        }
    }
    return [missing , repeating]

    }

//     let arr = [3,1,2,5,3]
// let n = arr.length

// console.log(better(arr,n));

/**
 * Optimal solution (using maths)
 */

function Optimal(arr){
    let n = arr.length
    const sumN = (n * (n + 1)) / 2;
    const squareN = (n * (n + 1) * (2 * n + 1)) / 6;

    let sumArr= 0
    let squareArr = 0

    for(let i=0; i<n; i++){
        sumArr += arr[i]
        squareArr += arr[i] * arr[i]
    }

    let value1 = sumN -sumArr
    let value2 = squareN - squareArr

    value2 = value2 / value1


    const x =( value1 + value2) /2
    const y = x-value1

    return [x,y]
}

let arr = [3,1,2,5,3]
console.log(Optimal(arr));

