function SumOfNnums(n){
    if(n==1){
        return 1
    }
        return n + SumOfNnums(n-1)
}

console.log(SumOfNnums(10));



/**
 * Without Recursion 
 */
function check(n){
    let sum = n*(n+1)/2

    return sum
}

console.log(check(10));