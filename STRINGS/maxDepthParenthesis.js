// We are given a string having parenthesis like below 
//      “( ((X)) (((Y))) )” 
// We need to find the maximum depth of balanced parenthesis, like 4 in the above example. Since ‘Y’ is surrounded by 4 balanced parentheses. 
// If parenthesis is unbalanced then return -1. 


function maxDepth(str,n){
    if(n===0) return 0

    let max= 0
    let current = 0 

    for(let i=0; i<n; i++){
        if(str[i] === '('){
            current++
            max = Math.max(max , current)
        }else if(str[i] === ')'){
            if(current > 0){
                current--
            }else{
                return -1
            }
        }
    }

    if(current!==0){
        return -1
    }

    return max
}


// using stack

function depthUsingStack(str,n){
    if(n===0) return 0

    let count = 0
    let stack = []

    for(let i=0; i<n; i++){
        if(str[i] === "("){
            stack.push(str[i])
        }else if(str[i] === ")"){
            if(count < stack.length){
                count = stack.length
            }
            stack.pop()
        }
    }

    return count
}

function main(){
    let str = ") p((q)) ((s)t) )"
    let n = str.length 

    let result = maxDepth(str,n)
    console.log(result);
}
main()