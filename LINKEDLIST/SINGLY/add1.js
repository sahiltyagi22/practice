// add 1 to the number represented by the linkedlist 

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(4)
let temp1 = new Node(5)
let temp2 = new Node(9)

head.next = temp1
temp1.next = temp2

function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}

function add(head){
    if(head === null) return null 
    
    let newHead = reverse(head)
    let curr = newHead 
    let number = curr.data 
    number++ 

    if(number === 10){
        curr.data = 0
    }else{
        curr.data = number
    }
    

    while(number === 10){
        curr = curr.next
        number = curr.data 
        number++
        curr.data = number
    }

    newHead = reverse(newHead)

    return newHead

}

function reverse(head){
    if(head === null) return null 
    if(head.next === null) return head 

    let prev = null
    let curr = head 

    while(curr!==null){
        let next = curr.next 
        curr.next = prev 
        prev = curr 
        curr = next
    }

    return prev
}

let result = add(head)
print(result)