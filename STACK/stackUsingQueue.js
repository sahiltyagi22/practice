// implement stack using queue 

class Stack{
    constructor(c){
        this.queue = []
        this.size = 0 
        this.capacity =c
    }

    push(element){
        if(this.size === this.capacity) return 'stack overflow'
        this.queue.push(element)
        this.size++

        for(let i=0; i<this.queue.length-1; i++){
            this.queue.push(this.queue.shift())
        }
    }

    pop(){
        if(this.size ===0) return 'stack underflow'

        let element = this.queue.shift()
        this.size--
         return element
    }

    isEmpty(){
        return this.size
    }
}

let stack = new Stack(5)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack);