//      We need 2 seperate list

// list 1

class Node1{
    constructor(data){
        this.data=data
        this.next = null
    }
}


let head1 = new Node1(1)
temp11 = new Node1(2)
temp12 = new Node1(3)
temp13 = new Node1(4)
temp14 = new Node1(6)

head1.next = temp11 
temp11.next = temp12
temp12.next = temp13
temp13.next = temp14



// LIST 2

class Node2{
    constructor(data){
        this.data=data
        this.next = null
    }
}


class Node{
    constructor(data){
        this.data=  data
        this.next = null
    }
}


let head2 = new Node2(2)
temp21 = new Node2(4)
temp22 = new Node2(6)
temp23 = new Node2(8)


head2.next = temp21
temp21.next = temp22
temp22.next = temp23



function intersection(head1, head2) {
    if (head1 === null || head2 === null) return "nhi aaaya";

    let resultHead = null;
    let resultTail = null;

    let curr1 = head1;
    let curr2 = head2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.data < curr2.data) {
            curr1 = curr1.next;
        } else if (curr2.data < curr1.data) {
            curr2 = curr2.next;
        } else {
            if (resultHead === null) {
                resultHead = new Node(curr1.data);
                resultTail = resultHead;
            } else {
                resultTail.next = new Node(curr1.data); 
                resultTail = resultTail.next;
            }
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
    }

    return resultHead;
}


let resultantList =  intersection(head1 , head2)
console.log(resultantList);