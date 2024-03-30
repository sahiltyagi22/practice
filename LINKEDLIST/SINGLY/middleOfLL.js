class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(10)
let temp1 = new Node(20)
let temp2 = new Node(30)

head.next = temp1
temp1.next = temp2

function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}

function middleOfLL(head){
    if(head===null) return -1

    let slowPointer = head
    let fastPointer = head

    while(slowPointer.next!==null && fastPointer.next!==null){
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    return slowPointer.data
}

console.log(middleOfLL(head));