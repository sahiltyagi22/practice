// You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

/**
 * Brute force
 */
function linear(arr, num){
    let n  = arr.length

    for(let i=0; i<n; i++){
        if(arr[i] === num){
            return true;
        }
    }
    
}

function longestSequence(arr,n){

    let longest = 1
    for(let i=0; i<n; i++){
        let x = arr[i]
        let count = 1

        while(linear(arr, x+1) == true){
            x += 1 
            count++
        }

        longest = Math.max(count , longest)
    }

    return longest
}

let arr = [3,2,8,9,5,4,1,2]
let n = arr.length

// console.log(longestSequence(arr,n));

/**
 * Better approach
 */

function longestConsequetiveSequence(arr,n){
    if(n===0){
        return 0
    }

    if(n ===1){
        return 1
    }

    arr.sort((a,b)=>a-b)

    let smallest = arr[0]
    let count =1
    let longest = 1

    for(let i=1; i<n; i++){
        if(arr[i] === arr[i-1]){
            continue
        }

        if(arr[i]-1 === smallest){
            count++
            smallest = arr[i]
        }else if(arr[i]-1 !== smallest){
            count = 1
            smallest = arr[i]
        }

        longest = Math.max(longest , count)
    }

return longest
 
}

let arr1 = [1,0,1,2]
let n1 = arr1.length

console.log(longestConsequetiveSequence(arr1,n1));


/**
 * OPTIMAL APPROACH
 */

function longest(arr,n){
    if(n===0) return 

    let longest = 1
    let set = new Set()

    for(let i=0; i<n; i++){
        set.add(arr[i])
    }

    for(let element of set){
        if(!set.has(element-1)){
            let x = element
            let count =1

            while(set.has(x+1)){
                x =x+1
                count++
            }
            longest = Math.max(longest , count)
        }
    }

    return longest
}


// let arr1 = [5,6,1,2,3,10,11,12,4,4]
// let n1 = arr1.length

// console.log(longest(arr1,n1));
