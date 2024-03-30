//  write a function to print "hellp world" 5 times


function recur(n){
    if(n>5) return 
    console.log("hello world")

    recur(n+1)
}

recur(1)


function fact(n){
    if(n==0) return 1

    return n * fact(n-1)
}

console.log(fact(5));


// function for fibonacci

function fibo(n){
    if(n>6) return 

    console.log(n);

    return n + fibo(n+1)
}


fibo(0)