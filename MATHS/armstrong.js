//  check if the given no is armstrong or not

function armstrong(n){
    let x = n 
    let sum = 0

    while(x!==0){
        let digit = x%10
        sum = sum + (digit * digit * digit)

        x = Math.floor(x/10)

    }

    if(sum == n){
        return true
    }else{
        return false
    }

}

console.log(armstrong(123));