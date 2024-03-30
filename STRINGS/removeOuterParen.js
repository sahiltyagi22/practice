// We have been given valid parentheses and we need to remove the outermost parentheses of every primitive string.
// ex = (()())(()) => ()()()


function removeOuterParenthesis(str,n){
    
    if(n<=1) return ""

    let resultString = ""
  
    let leftPointer = 0

    let count = 0

    for(let i=0; i<n; i++){
        if(str[i] === '('){
            count++
        }else{
            count--
        }

        if(count === 0){
            let currentString = str.slice(leftPointer+1 , i)
            resultString += currentString
            leftPointer = i+1 
            currentString = ""
        }
    }

    return resultString
}

function main(){
    let str = '((()())(())(()(())))'
    let n = str.length 

    let result = removeOuterParenthesis(str,n)
    console.log(result);
}

main()