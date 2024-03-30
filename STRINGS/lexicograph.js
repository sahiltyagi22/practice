// checking if both strings are same or not

function check(str1,str2){
    let n = str1.length 
    let m = str2.length 

    if(n!==m) return false

    for(let i=0; i<n; i++){
        if(str1[i]!==str2[i]) return false
    }
    return true
}


let str1 = 'sahil'
let str2 =  'sahil'

let result = check(str1 , str2)
console.log(result);