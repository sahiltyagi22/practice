// implementing queue using linked list

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.size = 0
        this.front =null 
        this.rear = null
    }

    isEmpty(){
        if(this.rear === null) return true 
        return false
    }

    getFront(){
        return this.front
    }

    getRear(){
        return this.rear
    }

    enqueue(data){
        let temp  = new Node(data)
        if(this.rear === null){
            this.rear=this.front = temp
        }else{
            this.rear.next = temp
            this.rear = temp
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty())return "underflow"
        let element = this.front.data
        this.front = this.front.next

        this.size--
        return element
    }
    
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

let element = queue.dequeue()
console.log(element);

console.log(queue);