//  check if given no is palindrome or not

function palindrome(n){
    let x =n
    let reverse = 0

    while(x!==0){
        let digit = x%10
        reverse = reverse*10 + digit

        x = Math.floor(x/10)
    }

    if(reverse == n){
        return true
    }
    return false
}

console.log(palindrome(121));