class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(10)
let temp1 = new Node(20)
let temp2 = new Node(30)
let temp3 = new Node(40)
let temp4 = new Node(50)

head.next = temp1
temp1.next = temp2
temp2.next = temp3
temp3.next = temp4

function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}

function reverseInGropu(head, k){
    if(head===null) return null

    let curr = head
    let prev = null
    let next = null

    let count = 0

    while(count<k && curr!==null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        count++
    }

    if(next!==null){
        head.next = reverseInGropu(next , k)
    }

    return prev
}

head = reverseInGropu(head , 2)
print(head)