// sort a linked list for 0,1,2 . 

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(1)
let temp1 = new Node(0)
let temp2 = new Node(0)
let temp3 = new Node(2)
let temp4 = new Node(2)
let temp5 = new Node(1)

head.next = temp1
temp1.next = temp2
temp2.next = temp3
temp3.next = temp4
temp4.next = temp5


function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}


/**
 * first approach 
 * 
 * copy the elements in array
 * sort that array in O(n) using pointers
 * copy those elements back to the list
 */


// Better approach (by changing links)

function sort(head){
    if(head === null || head.next === null) return head

    let dummy0 = new Node(0)
    let dummy1 = new Node(0)
    let dummy2 = new Node(0)

    let zero = dummy0
    let one  = dummy1
    let two  = dummy2

    let curr = head 

    while(curr){
        if(curr.data === 0){
            zero.next = curr 
            zero = zero.next
            curr = curr.next
        }else if(curr.data === 1){
            one.next = curr 
            one = one.next
            curr = curr.next
        }else{
            two.next = curr 
            two = two.next 
            curr = curr.next
        }
}
zero.next = dummy1.next || dummy2.next;
one.next = dummy2.next;
two.next = null;
head = dummy0.next;
return head;
}

let result = sort(head)
print(result)