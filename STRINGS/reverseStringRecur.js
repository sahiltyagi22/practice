//  reversing a string in a recursive way

function reverse(str,n,m){
  str.split('')
    if(str.length<=1) return str 

    if(n===m) return 

   [ str[n] , str[m]] =  [ str[m] , str[m]]

   reverse(str ,n+1 , m-1)

   return str
}

let str = 'sahil'
let n = 0
let m = str.length-1 

let result =  reverse(str,n,m)
console.log(result);