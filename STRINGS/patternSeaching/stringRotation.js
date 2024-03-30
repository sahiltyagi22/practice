//  we have to check whether a string is a rotation of another string or not 


function rotation(str1,str2){
    let n = str1.length 
    let m = str2.length 

    if(n!==m) return false

    str1 =str1+str1
    
    for(let i=0; i<str1.length; i++){
        let j = 0

        while(j<m && str1[i+j] === str2[j]){
            j++
        }
        if(j===m){
            return true
        }
    }

    return false

}



// optimized version 

function optimized(str1 , str2){
    let n = str1.length 
    let m = str2.length 

    if(n!==m) return false

    str1 =str1+str1

    if(str1.includes(str2)){
        return true
    }
    return false
}

function main(){
    let str1 = 'abcd'
    let str2 = 'abcd'

    let result = optimized(str1 , str2)
    console.log(result);
}

main();

