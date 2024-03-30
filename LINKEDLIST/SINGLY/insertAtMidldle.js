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

function insertAtMiddle(head, data){
    let temp = new Node(data)

    if(head === null){
        return temp
    }

    let count = 0
    let curr = head
    for(let curr = head ; curr!== null; curr = curr.next){
        count++
    }

    if(count %2 == 0){
        for(let i=0; i<Math.floor(count/2)-1 ; i++){
            curr = curr.next
        }
        }else{
            for(let i=0; i<Math.floor(count/2); i++){
                curr = curr.next
            }
        }

        temp.next = curr.next
        curr.next = temp

        return head
    }

    head =insertAtMiddle(head , 22)
    print(head)
