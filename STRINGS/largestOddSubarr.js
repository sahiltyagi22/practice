// find the longest odd subarray in a string of integers 


function oddSubStr(str,n){
    let resultStr = ''
    let current = ''

    for(let i=0; i<n; i++){
        if(str[i]%2!==0){
            current += str[i]
            if(current.length > resultStr.length){
                resultStr = current
            }
        }else{
            current = ''
        }
    }
    return resultStr
}

function main(){
    let str = '2123356'
    let n = str.length 

    let result = oddSubStr(str,n)
    console.log(result);
}

main()