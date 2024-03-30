class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(10)
let temp1 = new Node(20)
let temp2 = new Node(30)
let temp3= new Node(40)
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

function kthNodeFromEnd(head, k){
    if(head == null){
        return null
    }

    let first = head
    let second = head

    for(let i=0; i<k; i++){
        if(second === null) return -1
        second = second.next
    }

        while(second.next!==null){
            first = first.next
            second = second.next
        }
        first.next = first.next.next

        return head

}

head = kthNodeFromEnd(head , 2)
console.log(print(head));





   