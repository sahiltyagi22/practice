// Given an integer N, write a program to count the number of digits in N.

/**
 * Brute force
 */

// function countDigits(n){
//     let count = 0
//     let x =n

//    while(x!==0){
//     x = Math.floor(x/10)
//     count++
//    }

// return count
// }

// console.log(countDigits(12345));

/**
 * Optimal Approach
 */

function count(n){
    let x = n.toString()
    return x.length
}

console.log(count(12345));


