//  STACK 


class Stack{
    constructor(n){
     this.capacity = n
     this.stack = []
     this.top = -1
    }

    push(element){
        if(this.top === this.capacity-1){return("stack is full")}
        this.top += 1
        this.stack[this.top] = element
    }

    pop(){
        if(this.top === -1) {return("stack is empty")}
        let element = this.stack[this.top]
        this.top--
        return element
    }

    isEmpty(){
        if(this.top === -1) return true
        return false
    }

    peak(){
        if(this.top === -1) return "stack is empty"
        return this.stack[this.top]
    }
}




function validParenthesis(str){
    let n = str.length 

    let stack = new Stack

    if(n%2 !== 0) return false 

    for(let i=0; i<n; i++){
      if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
        stack.push(str[i])
      }else{
        if(stack.isEmpty() || str[i]!== stack.pop()){
            return false
        }
      }
    }

    return true
}

let str = ' )[ { } ( ) ]('

let result = validParenthesis(str)
console.log(result);