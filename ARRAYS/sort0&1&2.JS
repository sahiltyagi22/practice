// Given an array which consists of only 0, 1 and 2.
//  Sort the array without using any sorting algo


/**
 * BRUTE FORCE 
 */

function sort(arr, n){
    let zero = []
    let one = []
    let two = []

    for(let i=0; i<n; i++){
        if(arr[i] == 0){
            zero.push(arr[i])
        }else if(arr[i] ==1){
            one.push(arr[i])
        }else{
            two.push(arr[i])
        }
    }

    let result = zero.concat(one).concat(two)
    return  result
}

let arr = [2,1,2,0,0,2,1,0,2,1]
let n = arr.length

// console.log(sort(arr,n));



/**
 * Better solution that reduces space complexity to O(1) 
 */
function sort1(arr,n){
    for(let i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(arr[i]<arr[j]){
                [arr[i] , arr[j]] = [arr[j] , arr[i]]
            }
        }
    }

    return arr
}

let arr1 = [2,1,0,2,1,0,0]
let n1 = arr.length

// console.log(sort1(arr1,n1));


/**
 * DUTCH NATIONAL FLAG ALGORITHM
 */


function sort012(arr,n){
    let low =0
    let high = arr.length-1
    let mid =0
    let temp =0

    while(mid<=high){
        if(arr[mid] == 0){
             temp = arr[low]
             arr[low] = arr[mid]
             arr[mid] = temp

             low++
             mid++
        }else if(arr[mid] == 1){
            mid++
        }else{
            temp = arr[mid]
            arr[mid] = arr[high]
            arr[high] = temp

            high--
        }
    }

    return arr
}

let arr2 = [2,1,0,2,1,0,0]
let n2 = arr.length

console.log(sort012(arr2,n2));