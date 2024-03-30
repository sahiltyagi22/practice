// Given a singly linked list of size N, and an integer K.
//  You need to swap the Kth node from the beginning and Kth node from the end of the linked list.
//   Swap the nodes through the links. Do not change the content of the nodes.



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
temp2.next = null

function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}



function swap(head , k){
    let length =0
    let curr = head
    while(curr){
        length++
        curr = curr.next
        
    }

    if (k > length || k < 1) return head;
    if (k === (length - k + 1)) return head;

    let start = head;
    let startPrev = null;

    for (let i = 1; i < k; i++) {
        startPrev = start;
        start = start.next;
    }

    let end = head;
    let endPrev = null;

    for (let i = 1; i < length - k + 1; i++) {
        endPrev = end;
        end = end.next;
    }

    if (startPrev !== null) {
        startPrev.next = end;
    } else {
        head = end;
    }

    if (endPrev !== null) {
        endPrev.next = start;
    } else {
        head = start;
    }

    let temp = start.next;
    start.next = end.next;
    end.next = temp;

    return head;
}


head = swap(head,1)
console.log(head);