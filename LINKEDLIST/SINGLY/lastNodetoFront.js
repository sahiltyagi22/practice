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


function lastToFront(head){
    if(head === null || head.next === null) return head

    let curr = head
    let prev = curr

    while(curr.next!==null){
        prev = curr
        curr = curr.next
    }

    prev.next = null 
    curr.next = head 
    head = curr

    return head
}

head = lastToFront(head)
print(head)