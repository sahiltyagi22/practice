//  Given an array, print all the elements which are leaders.
//  A Leader is an element that is greater than all of the elements on its right side in the array.


/**
 * Brute force 
 */
function majority(arr,n){
    
let res = []
    for(let i=0; i<n; i++){
        let leader = true
        for(let j=i+1; j<n; j++){
            if(arr[j] > arr[i]){
                leader= false
                break
            }
        }

        if(leader == true){
            res.push(arr[i])
        }
    }
    return res 
}

// let arr =[2,3,1,6,9,8,4]
// let n = arr.length

// console.log(majority(arr,n));

/**
 * Optimal Approch
 */

function majorityElement(arr,n){
    let res = []

    let max = arr[n-1]
   res.push(max)

    for(i =n-2; i>=0; i--){
        if(arr[i] > max){
            res.push(arr[i])
            max = arr[i]
        }
    }

    return res
}

let arr =[2,3,1,6,9,8,4]
let n = arr.length

console.log(majorityElement(arr,n));

