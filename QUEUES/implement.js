// implementing queue using an array 

class Queue{
    constructor(c){
        this.queue = []
        this.capacity = c 
        this.size = 0 
        this.front = 0
    }

    getFront(){
        if(this.size === 0){
            return null
        }

        return this.queue[this.front]
    }

    getRear(){
        if (this.size===0) return null

        let rear = (this.front +this.size-1)%this.capacity
        return this.queue[rear]
    }

    enqueue(element){
        if(this.size === this.capacity) return "overflow"

        let rearPosition = (this.front + this.size) %this.capacity
        this.queue[rearPosition] = element
        this.size++ 
    }

    dequeue(){
        if(this.size===0) return 'underflow'
        let element = this.queue[this.front]
        this.front = (this.front +1)%this.capacity
        this.size-- 

        return element
    }

    isEmpty(){
        if(this.size === 0) return true

        return false
    }

}

let queue = new Queue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.queue);

let element =queue.dequeue()
queue.enqueue(6)
console.log(queue.queue);

