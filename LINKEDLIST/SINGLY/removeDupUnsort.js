// removing duplicate from unsorted list

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(10)
let temp1 = new Node(20)
let temp2 = new Node(30)
let temp3 = new Node(30)
let temp4 = new Node(20)

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


//  brute force O(n*n)
function removeDuplicate(head){
    if(head === null || head.next === null) return head 

    let pointer1= null
    let pointer2 = null 
    let duplicate = null 

    pointer1 = head

    while(pointer1!==null && pointer1.next!==null){
        pointer2 = pointer1

        while(pointer2!==null && pointer2.next!==null){
            if(pointer1.data == pointer2.next.data){
                pointer2.next = pointer2.next.next
            }else{
                pointer2 = pointer2.next
            }
        }
        pointer1 = pointer1.next
    }

    return head
}

head = removeDuplicate(head)
print(head)

console.log('better approach output');

// better approach (using hashing ) O(n)

function betterApproach(head){
    if(head === null || head.next === null) return head 

    let set = new Set()

    let curr = head
    let prev = null

    while(curr!==null){
        let currValue = curr.data

        if(set.has(curr)){
            prev.next = curr.next
        }else{
            set.add(currValue)
            prev = curr
        }
        curr = curr.next
    }

    return head
}

head =betterApproach(head)
print(head)