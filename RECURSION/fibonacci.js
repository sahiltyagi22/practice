function fibonacci(n){
    if(n <=1){
        return 1
    }

    let last = fibonacci(n-1)
    let secondLast = fibonacci(n-2)

    return last + secondLast
}

console.log(fibonacci(4));