// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.


function brute(str,n){
    if(n===0) return -1 

    let stack = []

    let finalValue = 0

    for(let i=0; i<n; i++){
        if (!isNaN(parseInt(str[i]))) { // Check if token is a number
            stack.push(parseInt(str[i])); // Push numbers onto the stack
        }else {
            if(str[i] === '*' ){
                if(stack.length){
                    let rightOperator =  parseInt(stack.pop())
                    let leftOperator = parseInt(stack.pop() || 1)
    
                    finalValue += leftOperator*rightOperator
    
                    stack.push(leftOperator * rightOperator)
                }
                
            } else if(str[i] === '/'){
                if(stack.length){
                    let rightOperator = parseInt(stack.pop ())
                    let leftOperator = parseInt(stack.pop() || 1)
                    stack.push(parseInt(leftOperator / rightOperator))
                }
            }else if(str[i] === '+'){
                if(stack.length){
                    let rightOperator = parseInt(stack.pop())
                    let leftOperator = parseInt(stack.pop() || 0)
    
                    let value = leftOperator + rightOperator

                    stack.push(value)
    
                    finalValue += value
                }
                
            }else if(str[i] === '-'){
                if(stack.length){
                    let rightOperator = parseInt(stack.pop())
                    let leftOperator = parseInt(stack.pop() || 0)
    
                    let value = leftOperator - rightOperator


                    stack.push(value)
    
                    finalValue += value
                }
            }
        } 
    }

    return stack.pop()
}
 

function main(){
    let str = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    let n = str.length

    let result = brute(str,n)
    console.log(result);
}
main()