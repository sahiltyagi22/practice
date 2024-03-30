// /IMPLEMENTING USING LINKED LIST 


class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor(c){
        this.head = null
        this.capacity = c
        this.size = 0
    }

    push(element){
        if(this.size === this.capacity) return "stack is full"
        let temp = new Node(element)
        temp.next = this.head
        this.head = temp

        this.size++
        return this.head
    }
    
    pop(){
        if(this.head===null) return "stack is empty"
        let element = this.head.data
        this.head = this.head.next

        this.size--

        return element
    }

    isEmpty(){
        return(this.head === null) 
        
    }

    peak(){
        return this.head.data
    }


}

let stack = new Stack(5)
stack.push(10)
stack.push(11)
stack.push(12)
stack.push(13)
stack.push(14)

console.log(stack.peak());
console.log(stack.pop());

// console.log(stack);
console.log(stack.isEmpty());