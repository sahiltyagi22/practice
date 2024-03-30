// seggregate odd and even of a list list (modify list)

// implementing linked list
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = new Node(10)
let temp1 = new Node(11)
let temp2 = new Node(15)
let temp3 = new Node(30)
let temp4 = new Node(31)
let temp5 = new Node(40)

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


// O(n*n) Approach
function seggregate(head) {
    if (head === null || head.next === null) return head;

    let curr = head;
    while (curr !== null) {
        if (curr.data % 2 !== 0) {
            let pointer = curr.next;

            while (pointer !== null && pointer.data % 2 !== 0) {
                pointer = pointer.next;
            }

            if (pointer !== null) {
                let temp = pointer.data;
                pointer.data = curr.data;
                curr.data = temp;
            } else {
                break; // No even node found after current odd node, exit loop
            }
        }
        curr = curr.next; // Move to the next node
    }
    return head;
}


// let result = seggregate(head)
// print(result)






// O(N) approach O(N) space
function oddEven(head){
    if(head === null) return null
    if(head.next === null) return head 

    let oddArray = []
    let evenArray = []

    let curr = head

    while(curr!==null){
        let element = curr.data 

        if(element%2==0){
            evenArray.push(element)
        }else{
            oddArray.push(element)
        }
        curr = curr.next
    }

    curr = head 
    let i=0
    while(i<evenArray.length){
        curr.data = evenArray[i]
        curr = curr.next 
        i++
    }

    i=0
    while(i<oddArray.length ){
        curr.data = oddArray[i]
        curr=curr.next
        i++
    }

    return head
}

// let result = oddEven(head)
// print(result)


// O(N)  approach
function seggregate(head) {
    if (head === null || head.next === null) return head;

    let even = head;
    let odd = head.next;

    while (even !== null && odd !== null) {
        while (even !== null && even.data % 2 === 0) {
            even = even.next;
        }

        while (odd !== null && odd.data % 2 !== 0) {
            odd = odd.next;
        }

        if (even !== null && odd !== null) {
            let temp = even.data;
            even.data = odd.data;
            odd.data = temp;
        }

        // Move both pointers forward
        if (even !== null) {
            even = even.next;
        }
        if (odd !== null) {
            odd = odd.next;
        }
    }

    return head;
}


let result = seggregate(head)
print(result)

