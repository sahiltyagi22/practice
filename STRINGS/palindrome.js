// checking if the string is palindrome or not

// using in build methods

function inBuild(str){
    let check = str.split('').reverse().join('')

    if(str!==check) return false;

    return true
}

// let str ='ab'
// console.log(inBuild(str));


// using loop

function loop(str){
    let n = str.length 

    let left = 0
    let right = n-1

    while(left<right){
        if(str[left]!==str[right]) return false

        left++
        right--
    }
    return true
}
let str ='aba'
console.log(loop(str));