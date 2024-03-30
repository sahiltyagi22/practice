// Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating (in any direction) string 'a' by exactly 2 places.


function brute(str1, str2){
    let n = str1.length
    let m = str2.length
    
    if(n===0 || m===0) return 0 
    if(n!==m) return 0

let leftRotate = str1.slice(2) + str1.slice(0,2)
let rightRotate = str1.slice(n-2) + str1.slice(0,n-2)

console.log(leftRotate);
console.log(rightRotate);

if(leftRotate === str2 || rightRotate === str2)  return 1 

return 0
   
}

function main(){
    let str1 = 'amazon'
    let str2 = 'azonam'

    let result =  brute(str1 , str2)
    console.log(result);
}
main()