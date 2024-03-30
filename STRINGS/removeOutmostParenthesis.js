// The problem "Remove Outermost Parentheses" involves taking a string representing
//  a valid parentheses sequence and removing the outermost parentheses of 
//  every primitive subsequence. A primitive subsequence is a non-empty, 
//  minimal subsequence of the original string.


function removeParenthesis(str){

    let n = str.length 

    if(n<=1) return str

    let newStr = str.split('')

    let resultantString=  []

    for(let i=0; i<n-1; i++){
        if(newStr[i] !== newStr[i+1]) {
            resultantString.push(newStr[i],newStr[i+1])
            i=i+2
        }
    }
    return resultantString

}

let str = '(()())(())'
let result = removeParenthesis(str)

console.log(result);