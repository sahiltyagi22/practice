/**
 * Brute Force
 */

function gdc(n1,n2){
    let factor = 0

    for(let i=1; i<=n1; i++){
    
            if(n1%i == 0 && n2%i == 0){
                factor = i
            }
        }
        return factor
    }

let n1 =88
let n2 = 35

console.log(gdc(n1,n2));

/**
 * Euclidean Algorithm
 */


function hcf(n1,n2){
    let a = n1 
    let b = n2

    while(a>0 && b>0){
         if(a >b){
            a = a%b
         }else if(b>a){
            b =b%a
         }
    }

    if(a == 0){return b}
    return a
}
console.log(hcf(20,12));