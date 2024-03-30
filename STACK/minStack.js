//  implementation of min stack


class Minstack{
    constructor(c){
        this.capacity = c
        this.stack = []
        this.minStack = []
        this.top = -1
    }

    push(element){
        if(this.top === this.capacity-1) return "stack is full"
        this.top++
        this.stack[this.top] = element

        if(this.minStack.length === 0 || element <= this.minStack[0]){
            this.minStack[0] = element
        }
    }
}

let minStack = new Minstack(5)
minStack.push(10)
minStack.push(4)
minStack.push(86)
minStack.push(9)
minStack.push(88)

console.log(minStack);