class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}


let head = new Node(-1)
let temp1 = new Node(5)
let temp2 = new Node(5)
let temp3 = new Node(4)
let temp4 = new Node(0)

head.next = temp1
temp1.next = temp2
temp2.next = temp3
temp3.next = temp4




function linkedListMergeSort(head){
    if(head===null || head.next===null) return head

    let middleNode = middle(head)

    let leftHalf = head
    let rightHalf = middleNode.next
    middleNode.next = null

    const sortedLeft = linkedListMergeSort(leftHalf)
    const sortedRight = linkedListMergeSort(rightHalf)
    return merge(sortedLeft , sortedRight)
    
}


// function to find middle
function middle(head){
    
    let slow = head
    let fast = head 

    while(fast!==null && fast.next!==null &&  fast.next.next!==null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}
// merge function
function merge(left , right){
    let dummyNode = new Node(0)
    let current = dummyNode

    while(left!==null && right!==null){
        if(left.data < right.data){
            current.next= left
            left = left.next
        }else{
            current.next = right
            right = right.next
        }
        current = current.next
    }

    if(left!==null){
        current.next = left
    }

    if(right!==null){
        current.next = right
    }

    return dummyNode.next
}
function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}



 head = linkedListMergeSort(head)
print(head)