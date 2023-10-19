
// Problem Statement: A monkey is given ‘n’ piles of bananas, whereas the ‘ith’ pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.

// Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

// Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.



function brute(arr,h){
    let max = Math.max(...arr)

    let totalHour = Infinity
    for(let i=1; i<max; i++){
        
         totalHour = countHour(arr,i)
    }
    if(totalHour <= h) return totalHour
}


function countHour(arr,hours){
    let n = arr.length

    let total = 0
    for(let i=0; i<n; i++){
        total += Math.ceil(arr[i] / hours)
    }
    return total
}

let arr = [25, 12, 8, 14, 19]
let h = 5

console.log(brute(arr,h));



/**
 * Optimal Solution 
 */

function Optimal(arr,h){
    let n = arr.length
    let ans  = Infinity

    let a = Math.max(...arr)

    let low = 1
    let high = a

    while(low<=high){

        let mid = Math.floor((low+high)/2)
        let totalHour = count(arr,mid)

        if(totalHour <=h){
            ans = mid
            high = mid-1
        }else{
            low = mid+1
        }
       
    }
return ans

}

function count(arr,hours){
    let n = arr.length

    let total = 0
    for(let i=0; i<n; i++){
        total += Math.ceil(arr[i] / hours)
    }
    return total
}

let bananas = [7, 15, 6, 3]
let h1 = 8

console.log(Optimal(bananas,h1));