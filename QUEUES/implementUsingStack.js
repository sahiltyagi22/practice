// implementing queue using stack

class Queue{
    constructor(c){
        this.stack = []
        this.size = 0
        this.capacity =c
    }

    enqueue(element){
        if(this.size === this.capacity) return 'overflow'
        this.stack.push(element)
        this.size++ 
    }

    dequeue(){

        if(this.stack.length === 0) return 'undeflow'
        if(this.stack.length === 1) return this.stack.pop()
        
        
        const item = this.stack.pop()
        let dequeuesItems = this.dequeue()

        // recursively adding elements back
        this.stack.push(item)
        return dequeuesItems
    }
}

const queue = new Queue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

let element = queue.dequeue()
let element1 = queue.dequeue()
let element2 = queue.dequeue()
let element3 = queue.dequeue()

console.log(queue);
console.log(element);
console.log(element1);
console.log(element2);
console.log(element3);