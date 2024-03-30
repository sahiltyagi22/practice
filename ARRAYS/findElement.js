//   Find the element that appears once and other element are appearing twice


/**
 * BRUTE FORCE
 */
function findElement(arr,n){

    let result = []
    for(let i=0; i<n; i++){
        let num  = arr[i]
        let flag = false
        for(let j=0; j<n; j++){
            if(i===j){
                continue
            }else{
                if(arr[j] ==  num){
                    flag = true
                }
            }
          
        }

        if(flag === false){
            result.push(arr[i])
        }
    }

    return result
}

// let arr = [2,5,1,7,3,2,1]
// let n = arr.length

// console.log(findElement(arr,n));


/**
 * Better Approach
 */

//  we can sort the array and then we can check

function find(arr, n){
    if(n=== 0) return 'array is empty'
    if(n===1) return arr

    arr.sort((a,b)=>a-b)

    let result = []

    for(let i=0; i<n; i++){
        if(arr[i]!==arr[i-1] || arr[i]!==arr[i+1]){
            result.push(arr[i])
        }
    }
    return result
}

let arr = [3,1,4,6,6,7,7,8,3]
let n = arr.length

console.log(findElement(arr,n));