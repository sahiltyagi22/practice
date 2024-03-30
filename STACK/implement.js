//  USING ARRAYS


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

let stack = new Stack(5)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

let x = stack.pop()
let y = stack.pop()

console.log(stack);
console.log(x);
console.log(y);

let top = stack.peak()
let check = stack.isEmpty()
console.log(top);
console.log(check);  