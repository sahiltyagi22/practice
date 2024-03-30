
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
temp4.next = temp2

function print(head){
    if(head == null){
        return null
    }

    console.log(head.data);
    print(head.next)
}



//  detect a loop

function detectLoop(head){
    if(head===null || head.next=== null) return false

    let slow = head
    let fast = head

    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next

        if(slow===fast){
            return true
        }
    }

    return false
}


//  Removing the loop

function removingLoop(head){
    if(head===null || head.next=== null) return false

    let slow = head
    let fast = head

    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next

        if(slow===fast){
            slow = head

            while(slow.next!==fast.next){
                slow = slow.next
                fast = fast.next
            }

            fast.next = null

            return "loop removed"
        }
    }
    return false
}



// Starting point of a loop

function startingOfLoop(head){
    if(head===null || head.next=== null) return false

    let slow = head
    let fast = head

    while(fast!==null && fast.next!==null){
        slow = slow.next
        fast = fast.next.next

        if(slow===fast){
            slow = head

            while(slow.next!==fast.next){
                slow = slow.next
                fast = fast.next
            }
                return slow.next
        }
    }
    return false
}


//  Length of loop
function lengthOfLoop(head) {
    if (head === null || head.next === null) return -1;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next

        if(slow===fast){
            break
        }
    }

    if (slow !== fast) {
        return -1;
    }

    let pointer = slow;
    slow = slow.next;
    let count = 1;

    while (slow !== pointer) {
        slow = slow.next;
        count++;
    }

    return count;
}





function main(){
    let result = lengthOfLoop(head)
    console.log(result);
}

main()