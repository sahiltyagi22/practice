function printNtoOne(n){
    if(n===0){
        return
    }

    console.log(n);
    printNtoOne(n-1)
}

printNtoOne(10)
