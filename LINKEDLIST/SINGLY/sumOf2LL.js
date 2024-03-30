// two numbers represented by linkedlists .return the sum 

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head1 = new Node(3)
// let temp11 = new Node(4)
// let temp12 = new Node(5)

// head1.next = temp11
// temp11.next = temp12

let head2 = new Node(0)
// let temp21 = new Node(4)
// let temp22 = new Node(5)

// head2.next = temp21
// temp21.next = temp22

function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}


function sum(head1, head2) {
    
        if(head1 === null) return head2
        if(head2 === null) return head1 
    
        let length1 = getLength(head1)
        let length2 = getLength(head2)
    
        let length = Math.max(length1 , length2)
    
        let newHead1 = reverse(head1)
        let newHead2 = reverse(head2)
        let carry = 0
        
        let dummyNode = null // Corrected initialization
    
        let i = 0
        while(i < length){
            let sum = (newHead1 ? newHead1.data : 0) + (newHead2 ? newHead2.data : 0) + carry 
            carry = Math.floor(sum / 10)
            sum = sum % 10 
    
            let temp = new Node(sum)
            if (!dummyNode) {
                dummyNode = temp
            } else {
                temp.next = dummyNode
                dummyNode = temp
            }
    
            if (newHead1) newHead1 = newHead1.next
            if (newHead2) newHead2 = newHead2.next
    
            i++
        }
    
        let resultHead = dummyNode.next
        return resultHead
    }
    


let result = sum(head1 , head2)
print(result)


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

function getLength(head){
    if(head === null) return 0 
    if(head.next === null) return 1 

    let curr = head 
    let length = 1 

    while(curr!==null){
        curr = curr.next
        length++
    }

    return length
}