function recursion(n){
    let count =n
    if(count == 5){
        return
    }

    console.log(count);

 recursion(count +1)
    
}

recursion(0)