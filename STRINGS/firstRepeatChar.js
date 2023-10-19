// Given a string, find the repeated character present first in the string.

// function repear(str){
//     let n = str.length
//     str= str.split('')

//     let check = str[0]
//     let low =0
//     let high =n-1

//     while(low<high){
//         let point = low+1

//         if(check === str[point]){
//             return str[point]
//         }else{
//             point++
//             low++
//         }
//     }
//     return -1
// }

// console.log(repear("sahils")); 


function repear(str){
    let n = str.length
    str= str.split('')

   let check = str[0]
   for(var i=1; i<n; i++){
        if(str[i] === check)
        return str[i]
   }
return -1
}

console.log(repear("sahils"));