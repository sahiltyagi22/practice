//   Find the element that appears once and other element are appearing twice


/**
 * BRUTE FORCE
 */
function findElement(arr,n){
    for(let i=0; i<n; i++){
        let num  = arr[i]
        count = 0

        for(let j=0; j<n; j++){
            if(arr[j] ==  num){
                count++
            }
        }

        if(count == 1) return num
    }
}

let arr = [1,1,2,3,3,4,4]
let n = arr.length

console.log(findElement(arr,n));


/**
 * Better Approach
 */

