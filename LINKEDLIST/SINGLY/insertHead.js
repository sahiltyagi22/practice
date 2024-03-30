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



function insertHead(data){
    let temp = new Node(data)

    if(head === null){
        return temp
    }

    temp.next = head
    head =temp
    return head
}

 head = insertHead(0)
console.log(print(head));