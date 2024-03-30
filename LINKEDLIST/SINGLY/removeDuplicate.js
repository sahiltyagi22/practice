//  removing duplicate from sorted linked list

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(10)
let temp1 = new Node(20)
let temp2 = new Node(20)
let temp3 = new Node(30)
let temp4 = new Node(30)

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
print(head)

function removeDuplicate(head) {
    if (head === null || head.next === null) return head;

    let curr = head;

    while (curr.next !== null) {
        if (curr.data === curr.next.data) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next
        }
    }

    return head;
}



function main(){
    head  = removeDuplicate(head)
    print(head)
}

main()