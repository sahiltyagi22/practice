//  converting a infix expression to prefix expression using a stack 


function alpha(element){
    if(element >='a' && element<='z' || element >='A' && element<='Z' || element >='0' && element<='9'  ){
        return true 
    }
    return false;
}

function prec(element){
    if(element === '^'){
        return 3
    }else if(element === '*' || element === '/'){
        return 2
    }else if(element === '+' || element === '-'){
        return 1
    }else{
        return -1
    }
}







function infixToprefix(str , n){
    if(n<=1) return str 

    str = str.split('').reverse().join('')

    let stack = []
    let result = []

    for(let i=0; i<n; i++){
        let element  = str[i]

        if(alpha(element)){
            result.push(element)
        }else if(element === '('){
            stack.push(element)
        }else if(element === ')'){
            while(stack[stack.length-1]!=='('){
                result.push(stack[stack.length-1])
                stack.pop()
            }
            stack.pop()
        }else{
            while(stack.length!==0&& prec(element)<prec(stack[stack.length-1])){
                result.push(stack[stack.length-1])
                stack.pop()
            }
            stack.push(element)
        }
    }
    
    while(stack.length!==0){
        result.push(stack[stack.length-1])
        stack.pop()
    }

    let prefixExpression = result.reverse().join('')
    return prefixExpression
}


function main(){
    let str = 'a*b+c'
    let n = str.length 

    let result  = infixToprefix(str , n)
    console.log(result);
}
main()