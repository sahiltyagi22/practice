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

function insertAtPos(data,pos){
    let temp = new Node(data)

    if(head === null) return temp

    let curr = head
    for(let i=1; i<pos-1; i++){
        curr = curr.next
    }
    temp.next = curr.next
    curr.next = temp

    return head
}

head = insertAtPos(25 , 3)
print(head)
